// @ts-check

/** @typedef {import('../types.js').Employment} Employment */

import { useEffect, useCallback } from 'react';
import { useSelector } from '@xstate/react';

import { useMachine } from '../machine/MachineRoot';

/**
 * Get the current filter properties and the callbacks to set the next ones.
 */
export function useFilterPeople() {
  const service = useMachine();
  const { send } = service;

  const machineFilter = useSelector(service, (state) => {
    // The current state of the UI filters the user see is:
    // - stored in the current filter (machine's `filter`) when there isn't an ongoing debounced fetch
    // - stored in the debounced filter (machine's `debounceFilter`) when there is an ongoing debounced fetch
    return state.context.debounceFilter || state.context.filter;
  });

  const query = machineFilter.query;
  const employment = machineFilter.employment;

  const includeContractors = employment.includes('contractor');
  const includeEmployees = employment.includes('employee');

  /** @type {(query:string) => void} */
  const setQuery = useCallback(
    (value) => {
      send({
        type: 'SET_FILTER',
        filter: { employment, query: value },
      });
    },
    [send, employment]
  );

  /** @type {(includeContractors:boolean) => void} */
  const setIncludeContractors = useCallback(
    (value) => {
      send({
        type: 'SET_FILTER',
        filter: { query, employment: getEmployment(includeEmployees, value) },
      });
    },
    [send, query, includeEmployees]
  );

  /** @type {(includeEmployees:boolean) => void} */
  const setIncludeEmployees = useCallback(
    (value) => {
      send({
        type: 'SET_FILTER',
        filter: { query, employment: getEmployment(value, includeContractors) },
      });
    },
    [send, query, includeContractors]
  );

  return {
    query,
    setQuery,
    includeEmployees,
    includeContractors,
    setIncludeEmployees,
    setIncludeContractors,
  };
}

/** @type {Employment[]} */
const noEmployments = [];
/** @type {Employment[]} */
const employeesOnly = ['employee'];
/** @type {Employment[]} */
const contractorsOnly = ['contractor'];
/** @type {Employment[]} */
const allEmployments = ['employee', 'contractor'];

/**
 * Get the correct employment array based ont he users input.
 * @param {boolean} includeEmployees
 * @param {boolean} includeContractors
 */
function getEmployment(includeEmployees, includeContractors) {
  if (includeEmployees && includeContractors) {
    return allEmployments;
  }

  if (includeContractors) {
    return contractorsOnly;
  }

  if (includeEmployees) {
    return employeesOnly;
  }

  return noEmployments;
}
