// @ts-check

/** @typedef {import('../../../types.js').Employment} Employment */

/**
 * Create querystring for the given search parameters.
 *
 * @param {Employment[]} employment - Employment type
 * @param {string} query - Free text search
 */
export function getQueryString(employment, query) {
  const params = [];

  if (query) params.push(`name_like=${query}`);

  // If the user is looking for both employees and contractor, no `employment` param must be set
  if (employment.length === 1) params.push(`employment=${employment}`);

  if (params.length === 0) return '';

  return '?' + params.join('&');
}
