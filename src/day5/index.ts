import { Day } from "../day";

class Day5 extends Day {

    constructor() {
        super(5);
    }

    //  PROPERTIES FOR A NICE STRING
    // contains at least three vowels
    // contains at least one letter that appears twice in a row
    // doest not containt strings 'ab' 'cd' 'pq' 'xy'

    solveForPartOne(input: string): string {
        var niceCounter = 0;
        var strings = input.split('\n');
        var isNice = false;

        strings.forEach(string => {
            isNice = this.applyRules(string) as boolean;
            if (isNice) niceCounter++;
        });

        return niceCounter.toString();;
    }

    solveForPartTwo(input: string): string {
        var niceCounter = 0;
        var strings = input.split('\n');
        var isNice = false

        strings.forEach(string => {
            isNice = this.applyRulesP2(string) as boolean;
            if (isNice) niceCounter++;
        });

        return niceCounter.toString();
    }

    private applyRules(input: string) {
        var containsString = false;

        if (input.match('ab')
            || input.match('cd')
            || input.match('pq')
            || input.match('xy')) { containsString = true; }

        var chars = input.split('');
        var doubleLetter = false;
        var vowelCounter = 0;
        var threeVowels = false;

        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === 'a') vowelCounter++;
            if (chars[i] === 'e') vowelCounter++;
            if (chars[i] === 'i') vowelCounter++;
            if (chars[i] === 'o') vowelCounter++;
            if (chars[i] === 'u') vowelCounter++;

            if (i + 1 > chars.length) return;
            if (chars[i] === chars[i + 1])
                doubleLetter = true;
        }

        if (vowelCounter < 3) threeVowels = false;
        else threeVowels = true;


        return doubleLetter && threeVowels && !containsString;
    }

    private applyRulesP2(input: string) {
        var chars = input.split('');
        var contains = false;
        var letterPairs = new Map<string, number>();
        for (let i = 0; i < chars.length; i++) {
            if (i + 1 > chars.length) break
            if (letterPairs.get(chars[i] + chars[i + 1]) === undefined)
                letterPairs.set(chars[i] + chars[i + 1], i)
            else {
                // rule out overlapping
                var index = letterPairs.get(chars[i] + chars[i + 1]) as number;
                if (index + 2 > chars.length) break;
                if (chars[index] === chars[index + 1] && chars[index] === chars[index + 2])
                    contains = false
                else
                    contains = true

                break;
            }
        }
        var repeat = this.checkRepeat(chars);

        return contains && repeat;
    }

    private checkRepeat(chars: string[]) {
        var repeat = false;
        for (let i = 0; i < chars.length; i++) {
            if (i + 2 > chars.length) break;
            if (chars[i] === chars[i + 2]) repeat = true;
        }

        return repeat;
    }
}

export default new Day5;