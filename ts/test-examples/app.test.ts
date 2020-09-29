import { Square } from 'ts/figures';
import { getArea } from './app';

describe('getArea function', () => {
  test('returns right area of square', () => {
    const square: Square = {
      topLeft: {
        x: 0,
        y: 0,
      },
      bottomRight: {
        x: 2,
        y: 2,
      },
    };
    expect(getArea(square)).toBe(4);
  });
})

