// @ts-check

/** @typedef {import('../../types.js').People} People */
/** @typedef {import('../../types.js').Filter} Filter */
/** @typedef {import('../../types.js').FetchError} FetchError */

import { getQueryString } from './utils/getQueryString';
import { normalizePeople } from './utils/normalizePeople';

/**
 * Fetch the People list.
 *
 * @param {Filter} filter
 */
export function fetchPeople(filter) {
  if (filter.employment.length === 0) return getEmptyEmploymentError();

  const url = `http://localhost:4002/people${getQueryString(filter.employment, filter.query)}`;
  const controller = new AbortController();

  /** @type {Promise<People[]>} */
  const load = fetch(url, { signal: controller.signal })
    .then((response) => response.json())
    .then((response) => normalizePeople(response));

  /** @type {() => void} */
  const cancel = () => controller.abort();

  return { load, cancel };
}

/**
 * Create a standard error for the no-employment parameters.
 */
function getEmptyEmploymentError() {
  /** @type {Promise<[]>} */
  const load = Promise.resolve([]);
  /** @type {() => void} */
  const cancel = () => {};

  return {
    load,
    cancel,
  };
}
