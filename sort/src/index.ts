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

console.log('Hi, There')

const logger = (message: string) => {
    console.log(message)
}

logger('apple')