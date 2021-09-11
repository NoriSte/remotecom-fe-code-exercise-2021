// @ts-check

// ---------------------------------------------------------------
// DOMAIN

/** @typedef {import('../../utils/currency.js').Currency} Currency */

/**
 * @typedef {Object} People
 * @property {number} id
 * @property {string} name
 * @property {number} salary
 * @property {string} country
 * @property {string} jobTitle
 * @property {Currency} currency
 * @property {Employment} employment
 *
 * @typedef {'employee' | 'contractor'} Employment
 */

// ---------------------------------------------------------------
// APP

/**
 * @typedef {Object} Filter
 * @property {string} query
 * @property {Employment[]} employment
 */

/**
 * @typedef {Object} FetchError
 * @property {string} errorMessage
 */

/**
 * @typedef {Object} FetchResponse
 * @property {People[]} people
 */

// Get rid of JSDoc "file is not a module" error
export const noop = {};
