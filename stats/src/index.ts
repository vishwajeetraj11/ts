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

// const matchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// }

enum matchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

// Team
let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
        manUnitedWins++
    } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} games.`)

/*
lec 99:-
Current Issues:
- Magic String Comparisons. { match[5] === 'H' Doesn't make sense for another developer who might read this code. }
- Source of data is hardcoded.
- Data array is all strings, even though it might have numbers in it.
- Variable named after a specific team.
- Analysis type is fixed
- No ability to output the report in different formats

lec 100:-
enum - enumeration

Enums
- Follow near-identical syntax rules as normal objects.
- Creates an object with the same keys and values when converted from TS to JS.
- Primary goal is to signal to other engineers that these are all closely related values.
- Use whenever we have a small fixed set of values that are all closely related are known at compile time.
*/