import { capitalizeFirstLetter } from '@/lib/utils';

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string', () => {
    const result = capitalizeFirstLetter('hello');

    expect(result).toBe('Hello');
  });

  it('should return an empty string if the input is empty', () => {
    const result = capitalizeFirstLetter('');

    expect(result).toBe('');
  });

  it('should return the same string if the first letter is already capitalized', () => {
    const result = capitalizeFirstLetter('Hello');

    expect(result).toBe('Hello');
  });
});
