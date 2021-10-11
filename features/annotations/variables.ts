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

// lec 19
// When do you use an annotations
// 1) Functions that return the 'any' type
const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

/*
any: 
- A type, just as 'string' or boolean are
- Means TS has no idea what this is - can't check for correct property references
- Avoid variables with 'any' at all costs
*/

/*
2) when we declare a variable on one line and initialize it later
*/

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
// lec 22
// 3) Variable whose type cannot be inferred correctly
let numbers = [-45, -2, 34];
let numberAboveZero: boolean | number;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
