import {multiply} from './math-functions.js';
import {Person} from './person.js';
import {Circle, Square, isCircle, isSquare} from './figures.js';

console.log('multiplication', multiply(10, 27));

const date = new Date();
const test: boolean = true;


let user: Person | null = null;
user = {
    name: 'Aleksey',
    age: 34,
};

function buildName(firstName: string, lastName: string = "Smith"): string {
    return firstName + " " + lastName;
}

function getArea(figure: Circle | Square): number {
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