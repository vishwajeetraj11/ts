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
import fs, { read } from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();
console.log(reader.data[0][0])
// const matchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// }


// Team
let manUnitedWins = 0;

for (let match of reader.data) {
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
- Source of data is hardcoded. { At the very top we've got that data hardcoded and we should prefer like some api get request.} { If we wanted to ever change our source of information to our program we would have to make a very significant change in str of program.}
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