// @ts-check

import styled from 'styled-components';
import Link from 'components/Link';

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
  gap: 10px;
`;

/**
 * @typedef {Object} Props
 * @property {() => void} onRetry
 */

/**
 * Render a generic error message and a retry button.
 *
 * @param {Props} props
 */
export function FetchFailed(props) {
  const { onRetry } = props;

  return (
    <Wrapper>
      <p>An error occurred.</p>
      <Link onClick={onRetry}>Retry</Link>
    </Wrapper>
  );
}
