import styled from 'styled-components';

export const Wrapper = styled.div`
  // --------------------------------------------
  // DIMENSIONS ---------------------------------
  width: min(210px, 100%); // Not compatible with Edge < 79

  // --------------------------------------------
  // BOX ----------------------------------------
  padding: 8px 32px 6px 14px;

  // --------------------------------------------
  // FLEX ---------------------------------------
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  // --------------------------------------------
  // APPEARANCE ---------------------------------
  // A huge border-radius is handy to have rounded edges without fighting with percentages or fixed values
  // @see https://www.w3.org/TR/css-backgrounds-3/#corner-overlap
  // @see https://stackoverflow.com/a/29966500/700707
  border-radius: 999px;
  border: 1px solid transparent; // border transition' starting value, avoids choppy transition and layout shifting
  background-color: var(--colors-blank);

  // --------------------------------------------
  // FONT ---------------------------------------
  font-size: 0.875rem;

  // --------------------------------------------
  // TRANSITIONS --------------------------------
  transition: border 250ms ease, box-shadow 250ms ease, background-color 250ms ease;

  // --------------------------------------------
  // PSEUDO/SPECIAL CLASSES ---------------------
  &:hover,
  &:focus,
  &:focus-within, // :focus-within isn't compatible with Edge < 79
  &.filled {
    background-color: #fdfeff; // TODO: Theme's closest one is --colors-linkWater, but it's too dark compared to the design specs
    border-color: var(--colors-catskillWhite);
  }
  &:focus,
  &:focus-within, // :focus-within isn't compatible with Edge < 79
  &.filled {
    box-shadow: inset 1px 2px 3px rgba(var(--colors-heather-rgb), 0.6);
  }
`;

export const IconWrapper = styled.span`
  // --------------------------------------------
  // DIMENSIONS ---------------------------------
  width: 0 0 24px;
  height: 24px;

  // --------------------------------------------
  // ICON ---------------------------------------
  svg {
    width: 100%;
    height: 100%;
    fill: var(--colors-lynch);
  }
`;

export const InputField = styled.input`
  // --------------------------------------------
  // DIMENSIONS ---------------------------------
  // This is a workaround to avoid the input field overflow its parent
  // @see https://css-tricks.com/flexbox-truncated-text/
  min-width: 0;

  // --------------------------------------------
  // BOX ----------------------------------------
  padding: 0;
  border: none;

  // --------------------------------------------
  // FLEX ---------------------------------------
  flex: 1 1 auto;

  // --------------------------------------------
  // APPEARANCE ---------------------------------
  background: none;
  &:hover,
  &:focus {
    outline: none;
  }

  // --------------------------------------------
  // FONT ---------------------------------------
  color: var(--colors-darkBlue);
  &::-webkit-input-placeholder,
  &::placeholder {
    color: var(--colors-lynch);
  }
`;
