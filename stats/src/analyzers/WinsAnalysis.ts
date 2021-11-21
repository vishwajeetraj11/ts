import { MatchData } from '../MatchData';
import { matchResult } from '../MatchResults';
import { Analyzer } from '../Summery';

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) { }

    run(matches: MatchData[]): string {
        // Team
        let wins = 0;

        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
                wins++
            } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
                wins++
            }
        }
        return `Team ${this.team} won ${wins} games.`;
    }
}