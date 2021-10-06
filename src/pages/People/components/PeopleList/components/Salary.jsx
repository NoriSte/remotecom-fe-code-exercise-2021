// @ts-check

/** @typedef {import('../../../../../utils/currency.js').Currency} Currency */

import { getCurrencySymbol, getSalary } from '../../../../../utils/currency.js';

/**
 * @typedef {Object} Props
 * @property {Currency} currency
 * @property {number} salary
 */

/**
 * Render the salary.
 *
 * @param {Props} props
 */
export function Salary(props) {
  const { currency, salary } = props;

  return (
    <>
      {getCurrencySymbol(currency)} {currency} {getSalary(currency, salary)}
    </>
  );
}
