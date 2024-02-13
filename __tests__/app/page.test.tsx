import Home from '@/app/page';
import { cleanup, render, screen } from '@testing-library/react';

describe('Home Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders Home component', () => {
    render(<Home />);
  });

  it('renders Sidebar component', () => {
    render(<Home />);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('renders Playground component', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
