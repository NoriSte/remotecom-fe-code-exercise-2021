import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import Filter from './';

describe('Filter', () => {
  it('When rendered, should render correctly', () => {
    // ARRANGE
    render(<Filter>Foo</Filter>);

    // ASSERT
    expect(screen.getByLabelText('Foo')).toBeInTheDocument();
  });

  it('When passed some custom attributes, should spread them', () => {
    // ARRANGE
    render(<Filter data-foo="12">Foo</Filter>);
    const filter = screen.getByLabelText('Foo');

    // ASSERT
    expect(filter.getAttribute('data-foo')).toBe('12');
  });

  it('When rendered as an uncontrolled component, should allow the users checking it', () => {
    // ARRANGE
    render(<Filter>Foo</Filter>);
    const filter = screen.getByLabelText('Foo');

    // ACT
    userEvent.click(filter);

    // ASSERT
    expect(filter.checked).toEqual(true);
  });

  it('When rendered as a controlled component, should render the passed value and call the passed callback', () => {
    // ARRANGE
    const onChange = jest.fn();
    render(
      <Filter checked={true} onChange={onChange}>
        Foo
      </Filter>
    );
    const filter = screen.getByLabelText('Foo');

    expect(filter.checked).toEqual(true);
    expect(onChange).toHaveBeenCalledTimes(0);

    // ACT
    userEvent.click(filter);

    // ASSERT
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
