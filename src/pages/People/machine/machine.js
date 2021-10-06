// @ts-check

/** @typedef {import('./types.js').Events} Events */
/** @typedef {import('./types.js').States} States */
/** @typedef {import('./types.js').Context} Context */
/** @typedef {import('./types.js').InitialContext} InitialContext */
/** @typedef {import('./types.js').SetFilterEvent} SetFilterEvent */

import { assign, createMachine } from 'xstate';
import { fetchPeople } from '../services';

/** @type {Context} */
export const initialContext = {
  people: [],
  filter: {
    query: '',
    employment: ['employee', 'contractor'],
  },
  debounceFilter: undefined,
  fetchErrors: [],
  fetching: false,
};

/** @type {import('xstate').StateMachine<Context, any, Events, States>} */
export const machine = createMachine(
  {
    id: 'people',
    strict: true,
    initial: 'idle',
    context: initialContext,
    states: {
      // INITIAL STATE
      // The machine start still, allowing external control over the first fetch
      idle: { on: { START: 'fetch' } },

      // FETCH STATES
      debounceFetch: {
        on: {
          // Changing the filters reset the debounce
          SET_FILTER: { actions: 'setFilter', target: 'debounceFetch' },
        },
        after: {
          debounceDelay: {
            target: 'fetch',
            actions: ['swapNextFilter'],
          },
        },
      },
      fetch: {
        on: {
          // Changing the filters reset the debounce and cancel the previous fetch, if any
          SET_FILTER: { actions: 'setFilter', target: 'debounceFetch' },

          // Fetch completion management
          SUCCESS: { actions: 'setSuccessData', target: 'success' },
          FAILURE: { actions: 'setErrorData', target: 'failure' },
        },
        entry: 'setFetchingData',
        invoke: { src: 'fetchPeople' },
      },

      // SUCCESS STATE
      success: {
        on: {
          // Changing the filters start the debounced fetch
          SET_FILTER: { actions: 'setFilter', target: 'debounceFetch' },
        },
      },

      // ERROR STATE
      failure: {
        on: {
          // After a failure, retying with the same filter happens immediately
          RETRY: { target: 'fetch' },

          // Changing the filters start the debounced fetch
          SET_FILTER: { actions: 'setFilter', target: 'debounceFetch' },
        },
      },
    },
  },

  {
    services: {
      // Fetch the new people and return a cancellation method, useful for subsequent, debounced, fetches
      fetchPeople: (context) => (send) => {
        const { load, cancel } = fetchPeople(context.filter);
        load
          .then((people) => send({ type: 'SUCCESS', people }))
          .catch((error) =>
            send({
              type: 'FAILURE',
              error: !!error.errorMessage
                ? { errorMessage: error.errorMessage }
                : { errorMessage: error.stack },
            })
          );
        return cancel;
      },
    },

    actions: {
      // Reset the previous fetch data and store the last fetched data
      setSuccessData: assign({
        people: (_ctx, event) => (event.type === 'SUCCESS' ? event.people : []),
        fetchErrors: (_ctx) => [],
        fetching: (_ctx) => false,
      }),

      // Reset the previous fetch data and piles up the received error
      setErrorData: assign({
        people: (_ctx) => [],
        fetchErrors: (ctx, event) => [
          ...ctx.fetchErrors,
          ...(event.type === 'FAILURE' ? [event.error] : []),
        ],
        fetching: (_ctx) => false,
      }),

      // Store that the machine is fetching
      setFetchingData: assign({
        fetching: (_ctx) => true,
      }),

      // Change the filter of the next fetch
      setFilter: assign({
        debounceFilter: (_ctx, event) => {
          if (event.type !== 'SET_FILTER') throw new Error(`Unmanaged ${event.type} event`);

          return event.filter;
        },
      }),

      // Empty the debounced filter and set the one to be used for fetching the new data
      swapNextFilter: assign({
        filter: (ctx) => {
          if (!ctx.debounceFilter) throw new Error('Missing ctx.debounceFilter');

          return ctx.debounceFilter;
        },
        debounceFilter: (_ctx) => undefined,
      }),
    },

    delays: {
      debounceDelay: 0,
    },
  }
);
