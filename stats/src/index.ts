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
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summery';

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load()
// matchReader.matches

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
)

// const summary = Summary.winsAnalysisWithHtmlReport('Man United.')

summary.buildAndPrintReport(matchReader.matches);

/*
lec 99:-
Current Issues:
- Magic String Comparisons. { match[5] === 'H' Doesn't make sense for another developer who might read this code. }
- Source of data is hardcoded. { At the very top we've got that data hardcoded and we should prefer like some api get request.} { If we wanted to ever change our source of information to our program we would have to make a very significant change in str of program.}
- Data array is all strings, even though it might have numbers in it.
- Variable named after a specific team. { manUnitedWins, what if we need to check if another team wins }
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

/*
lec 118
We did two refactors:
Inheritance (inside inheritance folder) vs Compostion (current)

Inheritance - Characterized by an 'is a' relationship between two classes.
Composition - Characterized by a 'has a' relationship between two classes.


lec 120 ->vvi
Favor object composition over class inheritance.
 - The most misunderstood statement ever.
 - The statement is correct.

*/
