import { Circle, Square, isCircle } from './figures';

function getArea(figure: Circle | Square): number {
  if (isCircle(figure)) {
    return Math.PI * Math.pow(figure.radius, 2);
  } else {
    const length = figure.bottomRight.x - figure.topLeft.x;
    return Math.pow(length, 2);
  }
}

export { getArea };
