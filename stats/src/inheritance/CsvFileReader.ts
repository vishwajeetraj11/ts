import fs from 'fs';
import { matchResult } from '../MatchResults';

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) { }
    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(`./${this.filename}`, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
            // .map((row: string[]): (Date | string | number | matchResult)[] => { // use touple --works better here 
            .map(this.mapRow)
    }
}

/*
lec 109

row[5] as matchResult <= Type Assertion

A Type assertion is where developers are trying to overide typescripts default behaviour.

We are trying to tell ts that hey we know what is going on here, but present ts only knows row[5] is string.
*/

/*
lec 111

TypeScript Generics

- Like function arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code

*/