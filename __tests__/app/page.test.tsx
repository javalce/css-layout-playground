import Home from '@/app/page';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

describe('Home Page', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders Home component', () => {
    render(<Home />);
  });
});
