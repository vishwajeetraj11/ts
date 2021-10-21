
interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {

    /*
    abstract - it is used to mark certain methods to exist in the future
    */

    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    /* collection will only have methods that are common to number[] and string[]
     declaring collection: number[] | string (like this.)
     would throw Error: Index signature in type 'string | number[]' only permits reading.
     simply because in case of arrays you can change the value at index i.
     in case of strings you cant because strings are immutable in js.
     and when you declare a variable type string | number[] then you can only be allowed to do things/access methods or properties that are common to string and number[]
     try it. const red = 'red'; 
             red[0]='X';
             console.log(red); // red 

    */

    // collection: number[];
    // constructor(collection: number[]) {
    //     this.collection = collection
    // }
    // constructor(public collection: Sortable) {
    // }

    sort(): void {
        const { length } = this;
        // for (let i = 0; i < length - 1; i++) {
        //     for (let j = 0; j < (length - 1 - i); j++) {

        //         /* 
        //         All of this only works if collection is number[]
        //         If colllection is an array of numbers. 
        //         A type guard is going to be a check on type of this.collection. Once we run a type guard we are essentially going to clarify the type of value we are working with, it will restore access to all the different properties associated with this.collection with an array of numbers and we would not have to be limited to just the properties that are common between an a string and an array of numbers.

        //         Setting up a typeguard
        //         - Narrow type of a value to a primary type
        //         typeof -> number,string,boolean,symbol
        //         - Narrow down every other type of value
        //         instanceof -> Every other value that is created with a constructor function

        //         This type check is only going to work in this way to restore access to all the properties in the union for number, string, boolean,symbol
        //         */

        //         // [[ TYPE GUARD ]]
        //         if (this.collection instanceof Array) { // This is to check to see if we are working with Array 
        //             /* Inside this if code block. this.collection have access to all Array methods which was not the case earlier. Earlier we only had access to methods/properties common between string and number[] */
        //             if (this.collection[j] > this.collection[j + 1]) {
        //                 const temp = this.collection[j]
        //                 this.collection[j] = this.collection[j + 1]
        //                 this.collection[j + 1] = temp;
        //             }
        //         }

        //         // Only going to work if collection is a string
        //         // If collection is a string, do this logic.
        //         // logic to compare and swap characters in a string
        //         if (typeof this.collection === 'string') {
        //             if (this.collection[j] > this.collection[j + 1]) {

        //             }
        //         }
        //     }
        // }

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < (length - 1 - i); j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }

    }
}

/*
lec 90

Turning Sorter class from a normal class to abstract class.
Simply because Sorter class will never be used directly its always going to be inherited.


Abstract Class

- Can't be used to create an object directly.
- Only used as a parent class.
- Can contain real implementation for some methods.
- The implementation methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implement some other method.
*/

/*
lec 93

Compare and Contrast of Interfaces vs Abstract Classes.

Interfaces
- Sets up a contract between different classes
- Use when we have very different objects that we want to work together.
- Promotes loose coipling

Inheritance/Abstract Classes
- Sets up a contract between different classes
- Use when we are trying to build up a definition
- Strongly couples classes together

Sort Project Complete.
*/