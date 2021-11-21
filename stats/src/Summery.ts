import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/OutputReports";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {

    /*
    Static Methods;
    Can be called directly on the class without creating an instance of a class.

    static printHello() {
        console.log('hi')
    }

    Summary.printHello();
    */

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        )
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}



