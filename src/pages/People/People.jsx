// @ts-check

import styled from 'styled-components';

import { Card, CardHeader, CardBody, CardFooter } from 'components/Card';

import { useStartMachine } from './hooks/useStartMachine';

import { Filters } from './components/Filters';
import { PageHeader } from './components/PageHeader';
import { PeopleList } from './components/PeopleList';

// The style is the same of the existing pages (AddEditPeople and Playground at the time of writing).
const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

/**
 * The content of the People page.
 */
export function People() {
  // The machine starts idle, and fetches the people once started
  useStartMachine();

  return (
    <Container data-testid="people">
      <PageHeader />

      <CardHeader />
      <Card>
        <CardBody>
          <Filters />
          <PeopleList />
        </CardBody>
      </Card>
      <CardFooter />
    </Container>
  );
}
