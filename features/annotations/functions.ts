/*
lec 23

TYPE ANNOTATIONS for functions - 
Code we add to tell typescript what typw of agruments a function will receive and what type of values it will return

TYPE INFERENCE for functions
Typescript tries to figure out what type of value a function will return 

Type inference doesn't works on arguments of the  function but it does works on the output of the function
*/

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a:number, b:number): number {
  return a/b;
}

const multiply = function(a:number, b:number): number {
  return a*b;
}

// lec 26 
const logger = (message:string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  // never => we are never going to execute the function completely at some point in time we are going to throw error and exit the function early without returning any value
  throw new Error(message);
}

const throwErrorAlt = (message: string): string => {
  // never => we are never going to execute the function completely at some point in time we are going to throw error and exit the function early without returning any value
  if(!message) throw new Error('No message found.');
  else return message
}