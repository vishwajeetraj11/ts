// Nothing to do with generics

// const addOne = (a:number): number => {
//     return a+1;
// }

// const addTwo = (a:number): number => {
//     return a+2;
// }

// const addThree = (a:number): number => {
//     return a+3;
// }

// const add = (a:number, b:number): number => {
//     return a+b;
// }

// add(10,1);
// add(10,2);

// class HoldNumber {
//     data: number;
// }

// class HoldString {
//     data: string;
// }

// const holdNumber = new HoldNumber();
// holdNumber.data = 123;

// const holdString = new HoldString();
// holdString.data = 'akmdf';

// Generic 

class holdAnything<TypeOfData> {
    data: TypeOfData
}

const holdNumber = new holdAnything<number>();
holdNumber.data = 123;

const holdString = new holdAnything<string>();
holdString.data = 's';