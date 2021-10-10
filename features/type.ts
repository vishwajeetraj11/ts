/*
Type - Easy way to refer to the different properties and functions that a value has

A value in js/ts is anything that we can assign to a variable..
strings
numbers
booleans
objects
functions
classes
arrays

All of different things has a type.

In the world of typescript, we have two different categories of typescript.

Types
- We say that there is a separate category called Object Types essentially because
we can write some code  that can essentially trick the ts into believing that one value is a different type.
1. Primitive - number, boolean, void, undefined, string, symbol, null
2. Object Types - functions, arrays, classes, objects

Why do we care about types at all?
There are two big reasons..
1. Types are used by the Typescript Compiler to analyze our code from errors.
2. Types allow other engineers to understand what values are flowing around our codebase.
*/
const today = new Date();
// today. <autocomplete> all the functions that the value (new Date()) has gets popped up.

const person = {
  age: 20
};

class Color {

}

const red = new Color();

/**
 * Where do we use types?
 * Everywhere!
 * Thats just a side effect of using typescript.
 * Whether you want to or not every value we define inside out application is going to have a type associated with it.
 */

/*
lec 14
Type Annotations -> Code we add to tell typescript what type of value a variable will refer to. [We (developers) tell Typescript the type]
Type inference -> Typescript tries to figure out what type of value a variable refers to. [Typescript guesses the type]
*/
