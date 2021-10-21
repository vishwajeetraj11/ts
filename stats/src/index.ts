/*
lec 96
{console.log('If you are reading this you are a genius.')}
Node.js docs file system module. (EXPLORING)

Basic Prcedure for the project -
1. Load the CSV via Node.js fs module
2. Parse
3. Analyze
4. Report

              10/08/2018 | Man United | Lecicester | 2 | 1 | H | A Marriner
Array Index - 0          | 1          | 2          |3  |4  |5  | 6
After Parsing.
*/

/* Cannot find module fs. (because of no types present) 
npm i @types/node
*/
import fs from 'fs';

const matches = fs.readFileSync('./football.csv', {
    encoding: 'utf-8',
}).split('\n').map((row: string): string[] => {
    return row.split(',')
})
// Team
let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} games.`)