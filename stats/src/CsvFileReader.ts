import fs from 'fs';


export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) { }

    read(): void {
        this.data = fs.readFileSync(`./${this.filename}`, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
        // .map((row: string[]): (Date | string | number | matchResult)[] => { // use touple --works better here 

    }
}

/*
lec 109

row[5] as matchResult <= Type Assertion

A Type assertion is where developers are trying to overide typescripts default behaviour.

We are trying to tell ts that hey we know what is going on here, but present ts only knows row[5] is string.
*/