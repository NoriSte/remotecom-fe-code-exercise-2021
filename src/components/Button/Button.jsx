import { BlueButtonStyled, WhiteButtonStyled } from './Button.styled';

export default function Button({ children, white, ...props }) {
  if (white === true) {
    return (
      <WhiteButtonStyled type="button" {...props}>
        {children}
      </WhiteButtonStyled>
    );
  }

  return (
    <BlueButtonStyled type="button" {...props}>
      {children}
    </BlueButtonStyled>
  );
}
