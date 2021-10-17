import { NumbersCollection } from './NumbersCollection'

export class Sorter {


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
    constructor(public collection: NumbersCollection) {
    }

    sort(): void {
        const { length } = this.collection;
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
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }

    }
}