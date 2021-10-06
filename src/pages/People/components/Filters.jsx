// @ts-check

import { useCallback } from 'react';
import styled from 'styled-components';

import Filter from 'components/Form/Filter';
import SearchField from 'components/Form/SearchField';

import { useFilterPeople } from '../hooks/useFilterPeople';

const Container = styled.div`
  // --------------------------------------------
  // FLEX ---------------------------------------
  display: flex;
  justify-content: space-between;

  // --------------------------------------------
  // BOX ----------------------------------------
  margin-bottom: 16px;
`;

const FilterButtonsContainer = styled.span`
  // --------------------------------------------
  // FLEX ---------------------------------------
  // Get the filter buttons inlined
  display: flex;
`;

/**
 * Render the the components that allow filtering the people.
 */
export function Filters() {
  const {
    query,
    setQuery,
    includeEmployees,
    includeContractors,
    setIncludeEmployees,
    setIncludeContractors,
  } = useFilterPeople();

  const onQueryChange = useCallback((e) => setQuery(e.target.value), [setQuery]);

  const onEmployeesChange = useCallback((e) => setIncludeEmployees(e.target.checked), [
    setIncludeEmployees,
  ]);
  const onContractorsChange = useCallback((e) => setIncludeContractors(e.target.checked), [
    setIncludeContractors,
  ]);

  return (
    <Container>
      <SearchField placeholder="Search employees..." value={query} onChange={onQueryChange} />

      <FilterButtonsContainer>
        <Filter checked={includeContractors} onChange={onContractorsChange}>
          Contractor
        </Filter>
        <Filter checked={includeEmployees} onChange={onEmployeesChange}>
          Employee
        </Filter>
      </FilterButtonsContainer>
    </Container>
  );
}
