/*
lec 96
{console.log('If you are reading this you are a genius.')}
Node.js docs file system module. (EXPLORING)
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

console.log(matches)