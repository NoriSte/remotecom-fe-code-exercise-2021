// @ts-check

/** @typedef {import('../../../types.js').People} People */

/**
 * Normalize/check the server response.
 *
 * @param {any} response
 * @returns {People[]}
 */
export function normalizePeople(response) {
  for (const people of response) {
    if (!isPeople(people)) {
      throw new Error("The object isn't a valid People");
    }
  }

  return response;
}

/**
 * Check if given object is a valid People.
 *
 * @param {any} people
 * @returns {people is People}
 */
function isPeople(people) {
  /** @type {People} */
  const p = people;

  if (typeof p.id !== 'number') return false;
  if (typeof p.name !== 'string') return false;
  if (typeof p.salary !== 'number') return false;
  if (typeof p.country !== 'string') return false;
  if (typeof p.jobTitle !== 'string') return false;
  if (typeof p.currency !== 'string') return false;

  if (p.employment !== 'employee' && p.employment !== 'contractor') return false;

  return true;
}
