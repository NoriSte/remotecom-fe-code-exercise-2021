import styled from 'styled-components';

export const Label = styled.label`
  // --------------------------------------------
  // BOX ----------------------------------------
  padding: 10px 12px;

  // --------------------------------------------
  // FLEX ---------------------------------------
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  // --------------------------------------------
  // APPEARANCE ---------------------------------
  border-radius: 12px;
  border: 2px solid var(--colors-spindle);
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px transparent;

  // --------------------------------------------
  // FONT ---------------------------------------
  font-size: 0.875rem;
  font-weight: 500;

  // --------------------------------------------
  // TRANSITIONS --------------------------------
  transition: box-shadow 250ms ease, background-color 250ms ease;

  // --------------------------------------------
  // SIBLINGS -----------------------------------
  & + & {
    margin-left: 16px;
  }

  // --------------------------------------------
  // PSEUDO CLASSES -----------------------------
  &:hover,
  &:active,
  // :focus-within isn't compatible with Edge < 79
  &:focus,
  &:focus-within {
    background-color: var(--colors-linkWater);
  }
  // :focus-within isn't compatible with Edge < 79
  &:focus,
  &:focus-within {
    box-shadow: 0px 0px 0px 2px var(--colors-irisBlue);
  }
`;

export const InputField = styled.input`
  // --------------------------------------------
  // RESET BROWSER STYLES -----------------------
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;

  // --------------------------------------------
  // BOX ----------------------------------------
  // Ease centering the ::after pseudo element
  box-sizing: content-box;

  // --------------------------------------------
  // DIMENSIONS ---------------------------------
  min-width: 12px;
  max-width: 12px;
  height: 12px;

  // --------------------------------------------
  // FLEX ---------------------------------------
  display: flex;
  align-items: center;
  justify-content: center;

  // --------------------------------------------
  // APPEARANCE ---------------------------------
  border: 1px solid var(--colors-spindle);
  border-radius: 2px;

  // --------------------------------------------
  // TRANSITIONS --------------------------------
  transition: border-color 250ms ease;

  // --------------------------------------------
  // PSEUDO-ELEMENTS ----------------------------
  &::after {
    display: block;
    position: relative;
    content: '';

    // --------------------------------------------
    // DIMENSIONS ---------------------------------
    width: 8px;
    height: 8px;

    // --------------------------------------------
    // APPEARANCE ---------------------------------
    transition: background-color 250ms ease;
    background-color: transparent;
    border-radius: 2px;
  }

  // --------------------------------------------
  // CHECKED ------------------------------------
  &:checked::after {
    // --------------------------------------------
    // APPEARANCE ---------------------------------
    background-color: var(--colors-irisBlue);
  }

  // --------------------------------------------
  // PSEUDO CLASSES -----------------------------
  &:hover,
  &:focus,
  &:active {
    border-color: var(--colors-irisBlue);
  }

  // :focus-within isn't compatible with Edge < 79
  &:focus,
  &:focus-within {
    outline: none;
  }
`;
