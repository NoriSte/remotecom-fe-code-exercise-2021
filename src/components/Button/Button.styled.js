import styled from 'styled-components';

export const ButtonStyled = styled.button`
  // --------------------------------------------
  // DIMENSIONS ---------------------------------
  min-height: 44px;

  // --------------------------------------------
  // BOX ----------------------------------------
  padding: 10px 22px;

  // --------------------------------------------
  // FLEX ---------------------------------------
  display: inline-flex;
  align-items: center;

  // --------------------------------------------
  // APPEARANCE ---------------------------------
  outline: none;
  border-width: 0px;
  border-radius: 24px;

  // --------------------------------------------
  // INTERACTION --------------------------------
  cursor: pointer;

  // --------------------------------------------
  // FONT ---------------------------------------
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;

  // --------------------------------------------
  // TRANSITIONS --------------------------------
  transition: box-shadow 250ms ease, background-color 250ms ease;
`;

// ATTENTION: in the below styles, the box-shadow is used to create an internal border!

export const BlueButtonStyled = styled(ButtonStyled)`
  // --------------------------------------------
  // APPEARANCE ---------------------------------
  box-shadow: 0 0 0 2px var(--colors-irisBlue) inset;
  background: var(--colors-irisBlue);

  // --------------------------------------------
  // FONT ---------------------------------------
  color: var(--colors-blank);

  // --------------------------------------------
  // PSEUDO CLASSES -----------------------------
  &:hover {
    box-shadow: 0 0 0 2px #4e3db5 inset;
    background: #4e3db5;
  }

  &:focus,
  &:focus-within {
    // :focus-within isn't compatible with Edge < 79
    box-shadow: 0 0 0 3px #d0caf7 inset;
  }
`;

export const WhiteButtonStyled = styled(ButtonStyled)`
  // --------------------------------------------
  // APPEARANCE ---------------------------------
  box-shadow: 0 0 0 2px #d0caf7 inset;
  background: var(--colors-blank);

  // --------------------------------------------
  // FONT ---------------------------------------
  color: var(--colors-irisBlue);

  // --------------------------------------------
  // PSEUDO CLASSES -----------------------------
  &:hover {
    background: #efedfc;
  }

  &:focus,
  &:focus-within {
    // :focus-within isn't compatible with Edge < 79
    box-shadow: 0 0 0 3px #b7b8eb inset;
  }
`;
