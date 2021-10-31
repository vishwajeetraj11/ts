import { CsvFileReader } from "./CsvFileReader";
import { matchResult } from "./MatchResults";
import { dateStringToDate } from "./utils";

export class MatchReader extends CsvFileReader {
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