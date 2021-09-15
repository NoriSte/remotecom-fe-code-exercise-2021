// @ts-check

/** @typedef {import('../../types.js').People} People */

import { Table } from 'components/Table';

import { usePeople } from '../../hooks/usePeople';
import { useRetryFetch } from '../../hooks/useRetryFetch';
import { useIsFetching } from '../../hooks/useIsFetching';
import { useFetchErrors } from '../../hooks/useFetchErrors';

import { Loading } from './components/Loading';
import { NoResults } from './components/NoResults';
import { TableBody } from './components/TableBody';
import { FetchFailed } from './components/FetchFailed';
import { TableHeader } from './components/TableHeader';

/**
 * Render all the states of the People list.
 *
 * Please note that:
 * - it doesn't manage the machine `idle` state, it takes for granted that a parent started the
 * machine in advance
 * - it uses the 'fetchErrors' to detect if the last fetch failed or not. This allows showing the
 * error message also when the state is in the `debounceFetch` but contains errors
 *
 */
export function PeopleList() {
  const people = usePeople();
  const isFetching = useIsFetching();
  const fetchFailed = useFetchErrors().length > 0;

  const retry = useRetryFetch();

  if (isFetching) {
    return (
      <>
        <Table>
          <TableHeader />
        </Table>
        <Loading />
      </>
    );
  }

  if (fetchFailed) {
    return (
      <>
        <Table>
          <TableHeader />
        </Table>
        <FetchFailed onRetry={retry} />
      </>
    );
  }

  if (people.length === 0) {
    return (
      <>
        <Table>
          <TableHeader />
        </Table>
        <NoResults />
      </>
    );
  }

  return (
    <Table>
      <TableHeader />
      <TableBody people={people} />
    </Table>
  );
}
