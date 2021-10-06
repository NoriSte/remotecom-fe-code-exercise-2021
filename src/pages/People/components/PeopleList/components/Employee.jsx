// @ts-check

/** @typedef {import('../../../types.js').People} People */

import styled from 'styled-components';

import Link from 'components/Link';
import { TableCell, TableRow } from 'components/Table';

import { Salary } from './Salary';

const CapitalizedTableCell = styled(TableCell)`
  // @see https://caniuse.com/?search=text-transform
  text-transform: capitalize;
`;

/**
 * @typedef {Object} Props
 * @property {People} employee
 */

/**
 * Render the employee and his/her data.
 *
 * @param {Props} props
 */
export function Employee(props) {
  const {
    employee: { id, name, jobTitle, employment, country, currency, salary },
  } = props;

  return (
    <TableRow data-testid={`people-list-row-${id}`}>
      <TableCell>{name}</TableCell>
      <TableCell>{jobTitle}</TableCell>
      <CapitalizedTableCell>{employment}</CapitalizedTableCell>
      <TableCell>{country}</TableCell>
      <TableCell align="right">
        <Salary currency={currency} salary={salary} />
      </TableCell>
      <TableCell align="right">
        <Link href={`/people/edit/${id}`}>Edit</Link>
      </TableCell>
    </TableRow>
  );
}
