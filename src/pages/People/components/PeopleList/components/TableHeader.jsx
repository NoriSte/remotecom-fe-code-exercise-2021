// @ts-check

import { TableThCell } from 'components/Table';

/**
 * Render the header of the People list.
 */
export function TableHeader() {
  return (
    <thead>
      <tr>
        <TableThCell style={{ width: '25%' }}>Name</TableThCell>
        <TableThCell style={{ width: '20%' }}>Role</TableThCell>
        <TableThCell style={{ width: '15%' }}>Type</TableThCell>
        <TableThCell style={{ width: '15%' }}>Country</TableThCell>
        <TableThCell style={{ width: '15%' }} align="right">
          Salary
        </TableThCell>
        <TableThCell style={{ width: '10%' }} align="right">
          {/* Link column */}
        </TableThCell>
      </tr>
    </thead>
  );
}
