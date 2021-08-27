import styled from 'styled-components';

export const LinkStyled = styled.a`
  // --------------------------------------------
  // APPEARANCE ---------------------------------
  color: var(--colors-irisBlue);
  outline: none;
  text-decoration: none;

  // --------------------------------------------
  // INTERACTION --------------------------------
  cursor: pointer;

  // --------------------------------------------
  // PSEUDO CLASSES -----------------------------
  &:hover {
    text-decoration: underline rgba(var(--colors-irisBlue-rgb), 0.45);
  }
`;
