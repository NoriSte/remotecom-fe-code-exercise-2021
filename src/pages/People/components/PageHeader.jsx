// @ts-check

import styled from 'styled-components';

import { usePeople } from '../hooks/usePeople';
import { useIsFetching } from '../hooks/useIsFetching';

import { PageTitle } from './PageTitle';
import { AddMemberButton } from './AddMemberButton';

const Container = styled.div`
  // --------------------------------------------
  // FLEX ---------------------------------------
  display: flex;
  justify-content: space-between;

  // --------------------------------------------
  // BOX ----------------------------------------
  margin-bottom: 32px;
`;

/**
 * Render everything that comes before the People list.
 */
export function PageHeader() {
  const people = usePeople();
  const fetchingPeople = useIsFetching();

  return (
    <Container>
      <PageTitle fetchingPeople={fetchingPeople} peopleAmount={people.length} />
      <AddMemberButton />
    </Container>
  );
}
