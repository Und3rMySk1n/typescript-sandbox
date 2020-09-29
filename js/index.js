import { isCircle } from './figures.js';
var getArea = function (figure) {
  if (isCircle(figure)) {
    return Math.PI * Math.pow(figure.radius, 2);
  } else {
    var length_1 = figure.bottomRight.x - figure.topLeft.x;
    return Math.pow(length_1, 2);
  }
};
var circle = {
  center: {
    x: 1,
    y: 2,
  },
  radius: 10,
};
var circleArea = getArea(circle);
console.log('circle area', circleArea);
// endless loop
for (var i = 0; i < 10; ) {
  console.log('hello!');
}
