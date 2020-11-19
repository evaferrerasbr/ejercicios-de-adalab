const fizzBuzz = require('./index');

describe('Fizzbuzz', () => {
  test('render fizz if number its multiple of 3', () => {
    expect(fizzBuzz(6)).toBe('fizz');
  });

  test('render buzz if number its multiple of 5', () => {
    expect(fizzBuzz(10)).toBe('buzz');
  });

  test('render fizzbuzz if number its multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  test('render number if number its not multiple of 3 or 5', () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});
