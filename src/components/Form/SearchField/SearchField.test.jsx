import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import SearchField from './';

describe('SearchField', () => {
  it('When rendered, should render correctly', () => {
    // ARRANGE
    render(<SearchField placeholder="Foo" />);

    // ASSERT
    expect(screen.getByPlaceholderText('Foo')).toBeInTheDocument();
  });

  it('When passed some custom attributes, should spread them', () => {
    // ARRANGE
    render(<SearchField data-foo="12" placeholder="Foo" />);
    const searchField = screen.getByPlaceholderText('Foo');

    // ASSERT
    expect(searchField.getAttribute('data-foo')).toBe('12');
  });

  it('When rendered as an uncontrolled component, should allow the users typing', () => {
    // ARRANGE
    render(<SearchField placeholder="Foo" />);
    const searchField = screen.getByPlaceholderText('Foo');

    // ACT
    userEvent.type(searchField, 'Foo bar');

    // ASSERT
    expect(searchField).toHaveValue('Foo bar');
  });

  it('When rendered as a controlled component, should render the passed value and call the passed callback', () => {
    // ARRANGE
    const onChange = jest.fn();
    render(<SearchField value="Foo" onChange={onChange} />);

    const searchField = screen.getByDisplayValue('Foo');
    expect(onChange).toHaveBeenCalledTimes(0);

    // ACT
    userEvent.type(searchField, 'b');

    // ASSERT
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
