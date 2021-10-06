// @ts-check

import styled from 'styled-components';

import LoadingLogo from 'components/LoadingLogo';

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
 * Render and center the Loading Logo
 */
export function Loading() {
  return (
    <Wrapper>
      <LoadingLogo />
    </Wrapper>
  );
}
