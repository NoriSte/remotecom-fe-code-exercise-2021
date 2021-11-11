import { ReactComponent as SearchIcon } from 'theme/icons/search.svg';
import { Wrapper, IconWrapper, InputField } from './SearchField.styled';

/**
 * The SearchField component implemented for the "people" page where the user can search and filter
 * for employees and employers.
 * All the props are spread down to the input field.
 */
export default function SearchField(props) {
  const filled = !!props.value || !!props.defaultValue;

  // TODO: I don't know if the component is controlled or uncontrolled, this is the simplest solution
  // for managing the "filled" state, taking for granted the component is controlled.
  const className = filled ? 'filled' : undefined;

  return (
    <Wrapper className={className}>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <InputField {...props}></InputField>
    </Wrapper>
  );
}

SearchField.defaultProps = {};
