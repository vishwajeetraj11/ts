import fs from 'fs';
import { matchResult } from './MatchResults';
import { dateStringToDate } from './utils';

type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    matchResult,
    string,
];

export class CsvFileReader {
    data: MatchData[] = [];

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
            .map(this.mapRow)
    }

    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResult, // 'H', 'A', 'D',
            row[6]
        ]
    }
}

/*
lec 109

row[5] as matchResult <= Type Assertion

A Type assertion is where developers are trying to overide typescripts default behaviour.

We are trying to tell ts that hey we know what is going on here, but present ts only knows row[5] is string.
*/