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

import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([3, 10, 2, -3, -1])

// Numbers
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

// String
// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)


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