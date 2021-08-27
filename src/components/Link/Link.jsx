import { LinkStyled } from './Link.styled';

export default function Link({ children, ...props }) {
  return <LinkStyled {...props}>{children}</LinkStyled>;
}
