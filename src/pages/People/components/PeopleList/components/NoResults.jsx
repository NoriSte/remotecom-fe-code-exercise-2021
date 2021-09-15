// @ts-check

import styled from 'styled-components';

const Wrapper = styled.div`
  // --------------------------------------------
  // DIMENSIONS ---------------------------------
  width: 100%;
  min-height: 200px;

  // --------------------------------------------
  // FLEX ---------------------------------------
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Render a "no result" text.
 */
export function NoResults() {
  return (
    <Wrapper>
      <p>No people.</p>
    </Wrapper>
  );
}
