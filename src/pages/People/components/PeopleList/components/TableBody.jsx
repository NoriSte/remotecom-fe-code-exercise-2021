// @ts-check

/** @typedef {import('../../../types.js').People} People */

import { Employee } from './Employee';

/**
 * @typedef {Object} Props
 * @property {People[]} people
 */

/**
 * Render the body of the People list.
 *
 * @param {Props} props
 */
export function TableBody(props) {
  const { people } = props;

  return (
    <tbody data-testid="people-list-table">
      {people.map((p) => (
        <Employee key={p.id} employee={p} />
      ))}
    </tbody>
  );
}
