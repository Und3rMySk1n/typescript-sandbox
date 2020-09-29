import {Circle, Square, isCircle} from './figures.js';

const getArea = (figure: Circle | Square) => {
    if (isCircle(figure)) {
        return Math.PI * Math.pow(figure.radius, 2);
    }
    else {
        const length = figure.bottomRight.x - figure.topLeft.x;
        return Math.pow(length, 2);
    }
}

const circle: Circle = {
    center: {
        x: 1,
        y: 2,
    },
    radius: 10,
}

const circleArea = getArea(circle);
console.log('circle area', circleArea);

// endless loop
for (let i: number = 0; i < 10; ) {
    console.log('hello!');
}