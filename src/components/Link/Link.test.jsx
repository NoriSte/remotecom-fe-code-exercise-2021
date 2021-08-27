import { render, screen, fireEvent } from '@testing-library/react';
import Link from './';

describe('Link', () => {
  it('renders correctly', () => {
    render(<Link>Hello</Link>);

    const link = screen.getByText('Hello');

    expect(link).toHaveTextContent('Hello');
  });

  it('spreads custom attributes', () => {
    const clickFn = jest.fn();
    render(
      <Link data-foo="12" onClick={clickFn}>
        Hello
      </Link>
    );

    const link = screen.getByText('Hello');

    expect(link.getAttribute('data-foo')).toBe('12');

    fireEvent.click(link);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
