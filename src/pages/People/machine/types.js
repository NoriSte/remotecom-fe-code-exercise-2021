// @ts-check

/** @typedef {import('../types.js').Filter} Filter */
/** @typedef {import('../types.js').People} People */
/** @typedef {import('../types.js').Employment} Employment */
/** @typedef {import('../types.js').FetchError} FetchError */

// ---------------------------------------------------------------
// CONTEXT
/**
 * @typedef {Object} Context
 * @property {Filter} filter The filter used for the last fetch
 * @property {Filter | undefined} debounceFilter The filter of the next, debounced, fetch if any
 * @property {[] | People[]} people The data returned from the last fetch
 * @property {[] | FetchError[]} fetchErrors The queue of errors of the last fetches, emptied when the latest fetch succeeded
 * @property {boolean} fetching If the machine is fetching or not
 *
 *
 * Initially, the state machine doesn't contain any data bu the default filter.
 * @typedef {Object} InitialContext
 * @property {Filter} filter
 * @property {undefined} debounceFilter
 * @property {false} fetching
 * @property {[]} people
 * @property {[]} fetchErrors
 *
 *
 * When the next fetch is debounced, the next filter is stored in `debounceFilter`
 * @typedef {Object} DebounceFetchContext
 * @property {Filter} debounceFilter
 *
 *
 * During the fetch, the context includes the `filter` passed to the server and a `fetching` indicator.
 * @typedef {Object} FetchContext
 * @property {Filter} filter
 * @property {true} fetching
 *
 *
 * When the fetch succeed, the data are stored and the errors reset.
 * @typedef {Object} SuccessContext
 * @property {People[]} people
 * @property {Filter} filter
 * @property {[]} fetchErrors
 * @property {false} fetching
 *
 *
 * In case of errors, the data are reset and the list of the last errors are stored.
 * @typedef {Object} FailureContext
 * @property {[]} people
 * @property {Filter} filter
 * @property {FetchError[]} fetchErrors
 * @property {false} fetching
 *
 */

// ---------------------------------------------------------------
// EVENTS
/**
 * @typedef {InternalEvents | ExternalEvents | UserEvents} Events
 */

// INTERNAL EVENTS
/**
 * Internal events, helpful for typing purposes.
 * @typedef {InternalFetchSuccessEvent | InternalFetchFailureEvent} InternalEvents
 *
 *
 * @typedef {Object} InternalFetchSuccessEvent
 * @property {'SUCCESS'} type
 * @property {People[]} people
 *
 *
 * @typedef {Object} InternalFetchFailureEvent
 * @property {'FAILURE'} type
 * @property {FetchError} error
 *
 */

// EXTERNAL EVENTS
/**
 * All the events triggered by the consumer but not necessarily directly by the user.
 * @typedef {StartEvent} ExternalEvents
 *
 *
 * @typedef {Object} StartEvent
 * @property {'START'} type
 *
 */

// USER EVENTS
/**
 * All the events triggered mostly by user inputs.
 * @typedef {RetryEvent | SetFilterEvent} UserEvents
 *
 *
 * @typedef {Object} RetryEvent
 * @property {'RETRY'} type
 *
 *
 * @typedef {Object} SetFilterEvent
 * @property {'SET_FILTER'} type
 * @property {Filter} filter
 */

// ---------------------------------------------------------------
// STATES
/**
 * All the possible states of the machine.
 * @typedef {InitialState | FetchState | DebounceFetchState | SuccessState | FailureState} States
 *
 *
 * @typedef {Object} InitialState
 * @property {'idle'} value
 * @property {Context & InitialContext} context
 *
 * @typedef {Object} FetchState
 * @property {'fetch'} value
 * @property {Context & FetchContext} context
 *
 * @typedef {Object} DebounceFetchState
 * @property {'debounceFetch'} value
 * @property {Context & DebounceFetchContext} context
 *
 * @typedef {Object} SuccessState
 * @property {'success'} value
 * @property {Context & SuccessContext} context
 *
 * @typedef {Object} FailureState
 * @property {'failure'} value
 * @property {Context & FailureContext} context
 */

// Get rid of JSDoc "file is not a module" error
export const noop = {};
