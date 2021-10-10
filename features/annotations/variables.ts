/*
lec 14,15,16
Type Annotations -> Code we add to tell typescript what type of value a variable will refer to. [We (developers) tell Typescript the type]
*/

const apples: number = 5;
/* The colon (:) and the word number is our type annotation. 
Trying to assign some other type of value will result in an error;
*/

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array 
let colors: string[] = ['red', 'green', 'blue'];
let myNums: number[] = [1, 2, 3];

// Classes
class Car {

}

let car: Car = new Car();

// Object Literal
let point: { x: number, y: number; } = {
  x: 10, y: 20
};

// Function 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// lec 18 
/*
Type inference - 

variable declaration (const color)
variable initialization ('red';)
const color = 'red';

If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us.'

When do we use Type Annotation: 
- When we declare a variable on one line then initialize it later.
- When we want a variable to have a type that can't be inferred.
- When a function returns the 'any' type and we need to clarify the  value

When do we use Type inference: - TS guesses the type. 
In general, we are going to rely on inference always.
*/
