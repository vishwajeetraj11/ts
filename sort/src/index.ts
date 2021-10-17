/*
lec 72
tsc [filename].ts -> Run in terminal
when we run this in the terminal typescript is going to compile that file and give a [filename].js.
so essentially it just takes the name of the files and turns all the code in js. 
it gives the js equivalent of out ts code.

running tsc [filename].ts will give [filename].js in the same folder, which will become messy if the project is big enough.

folder str
build - compiled js
src - ts

in order for the js files to go into build folder we need configure ts compiler to work with two separate directories. (need to geneate a file called tsconfig.json)

This is a typescript compiler configuration file we can use to customize how the compiler behaves to generate the file 
run
tsc --init

In order to tell ts compiler to get all the code from src dir and send results in the build dir. (change these 2 properties below in tsconfig.json)
    "rootDir": "./src",                                  Specify the root folder within your source files.
    "outDir": "./build",                                 Specify an output folder for all emitted files.

    now we only need to run tsc in terminal.

    tsc -w                                               Watch all the files inside of the src (rootDir). So anytime we make any change the compiler will automatically recompile all ts codes to js and put it in build folder.  So that we dont have to run tsc again and again
*/

const array = [7, 10, 4, 3, 20, 15];

class Sorter {
    // collection: number[];
    // constructor(collection: number[]) {
    //     this.collection = collection
    // }

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
    constructor(public collection: number[] | string) {
    }

    sort(): void {
        const { length } = this.collection;
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < (length - 1 - i); j++) {

                /* 
                All of this only works if collection is number[]
                If colllection is an array of numbers. 
                A type guard is going to be a check on type of this.collection. Once we run a type guard we are essentially going to clarify the type of value we are working with, it will restore access to all the different properties associated with this.collection with an array of numbers and we would not have to be limited to just the properties that are common between an a string and an array of numbers.

                Setting up a typeguard
                - Narrow type of a value to a primary type
                typeof -> number,string,boolean,symbol
                - Narrow down every other type of value
                instanceof -> Every other value that is created with a constructor function

                This type check is only going to work in this way to restore access to all the properties in the union for number, string, boolean,symbol
                */

                // [[ TYPE GUARD ]]
                if (this.collection instanceof Array) { // This is to check to see if we are working with Array 
                    /* Inside this if code block. this.collection have access to all Array methods which was not the case earlier. Earlier we only had access to methods/properties common between string and number[] */
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j]
                        this.collection[j] = this.collection[j + 1]
                        this.collection[j + 1] = temp;
                    }
                }

                // Only going to work if collection is a string
                // If collection is a string, do this logic.
                // logic to compare and swap characters in a string
                if (typeof this.collection === 'string') {
                    if (this.collection[j] > this.collection[j + 1]) {

                    }
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort()
console.log(sorter.collection)

// for(let i=0; i<array.length-1;i++) {
//     for(let j=0; j<(array.length-1-i); j++){
//         if(array[j]>array[j+1]) {
//             let temp: number;
//             temp = array[j]
//             array[j]=array[j+1]
//             array[j+1]=temp;
//         }
//     }
// }

// console.log(array)