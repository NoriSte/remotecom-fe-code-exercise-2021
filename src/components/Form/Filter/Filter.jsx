import { Label, InputField } from './Filter.styled';

/**
 * The Filter checkbox implemented for the "people" page where the user can search and filter
 * for employees and employers.
 */
export default function Filter({ children, ...props }) {
  return (
    <Label>
      {children}
      <InputField type="checkbox" {...props}></InputField>
    </Label>
  );
}

Filter.defaultProps = {};
