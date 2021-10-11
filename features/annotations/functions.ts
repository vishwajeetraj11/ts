/*
lec 23

TYPE ANNOTATIONS for functions - 
Code we add to tell typescript what typw of agruments a function will receive and what type of values it will return

TYPE INFERENCE for functions
Typescript tries to figure out what type of value a function will return 
*/

const add = (a: number, b: number): number => {
  return a + b;
};
