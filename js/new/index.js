import { multiply } from './math-functions.js';
import { isCircle } from './figures.js';
console.log('multiplication', multiply(10, 27));
var date = new Date();
var test = true;
var user = null;
user = {
    name: 'Aleksey',
    age: 34,
};
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
function getArea(figure) {
    if (isCircle(figure)) {
        return Math.PI * Math.pow(figure.radius, 2);
    }
    else {
        var length_1 = figure.bottomRight.x - figure.topLeft.x;
        return Math.pow(length_1, 2);
    }
}
var circle = {
    center: {
        x: 1,
        y: 2,
    },
    radius: 10,
};
var circleArea = getArea(circle);
console.log('circle area', circleArea);
