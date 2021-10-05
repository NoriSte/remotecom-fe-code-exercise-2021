// @ts-check

import styled from 'styled-components';

import { ReactComponent as Icon } from 'theme/icons/user.svg';
import BaseButton from 'components/Button';

const ButtonContainer = styled.div`
  // --------------------------------------------
  // APPEARANCE ---------------------------------
  // filter hugs the content edges instead of applying the shadow to to the box of the children
  // see: https://css-tricks.com/almanac/properties/b/box-shadow/#comparison-with-filter-drop-shadow
  filter: drop-shadow(var(--shadow-btnIrisPurple));
`;

const Button = styled(BaseButton)`
  // --------------------------------------------
  // ICON ---------------------------------------
  svg {
    fill: var(--colors-blank);
    margin-right: 10px;
  }
`;

export function AddMemberButton() {
  return (
    <ButtonContainer>
      <Button>
        <Icon />
        Add member
      </Button>
    </ButtonContainer>
  );
}
