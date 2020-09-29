import {isCircle, Circle} from './figures';

const numberOne = 1;
numberOne = 2;


console.log(numberOne);

const noTypeVariable = 1;



console.log(noTypeVariable);

function print(
  
  someVar: number
  
  
  ) {


  console.log(someVar);

}

const notDefinedVariable = 123;


print(notDefinedVariable);

const circle: Circle = {
  center: {
      x: 1,
      y: 2,
  },
  radius: 10,
}

console.log('Is circle Cirle?', isCircle(circle));