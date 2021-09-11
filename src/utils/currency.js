// @ts-check

// Currency utilities

/**
 * @typedef {'EUR' | 'USD' | 'GBP'} Currency
 * @typedef {'it-IT' | 'en-US' | 'en-GB'} Locale
 */

/**
 * @typedef {Object} Props
 * @property {Currency} currency
 * @property {number} salary
 */

/**
 * Get the currency symbol for the given currency code.
 *
 * @param {Currency} currency
 */
export function getCurrencySymbol(currency) {
  switch (currency) {
    case 'EUR':
      return '€';

    case 'USD':
      return '$';

    case 'GBP':
      return '£';

    default:
      return '';
  }
}

/**
 * Stringify the salary based on the country of the currency code.
 * @example
 * // returns 10.000,00
 * getSalary('EUR', 10000)
 * // returns 10,000.00
 * getSalary('USD', 10000)
 *
 * @param {Currency} currency
 * @param {number} salary
 */
export function getSalary(currency, salary) {
  switch (currency) {
    case 'USD':
      return salary.toLocaleString(getLocale(currency), { minimumFractionDigits: 2 });

    case 'EUR':
    case 'GBP':
      return salary.toLocaleString(getLocale(currency), { minimumFractionDigits: 2 });

    default:
      return salary.toString();
  }
}

/**
 * @param {Currency} currency
 */
function getLocale(currency) {
  switch (currency) {
    case 'EUR':
      return 'it-IT';

    case 'GBP':
      return 'en-GB';

    case 'USD':
    default:
      return 'en-US';
  }
}
