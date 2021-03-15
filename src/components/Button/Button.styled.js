import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;

  background: var(--colors-irisBlue);
  color: var(--colors-blank);

  ${({ bigger }) => bigger ? `
    min-width: 182px;
    justify-content: center;
    ` : null}

  ${({ inverse }) => inverse ? `
    color: var(--colors-irisBlue);
    background-color: var(--colors-blank);
    border: 2px solid var(--colors-irisBlue-lighter);
  ` : null}
`;
