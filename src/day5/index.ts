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
        // var isNice = this.applyRules('dvszwmarrgswjxmb');
        var niceCounter = 0;
        var strings = input.split('\n');
        var isNice = false;

        strings.forEach(string => {
            isNice = this.applyRules(string) as boolean;
            if (isNice) niceCounter++;
        });
        console.log(niceCounter);

        return niceCounter.toString();;
    }

    solveForPartTwo(input: string): string {
        // var result = this.applyRulesP2('uurcxstgmygtbstg');
        var niceCounter = 0;
        var strings = input.split('\n');
        var isNice = false

        strings.forEach(string => {
            isNice = this.applyRulesP2(string) as boolean;
            if (isNice) niceCounter++;
        });

        console.log(niceCounter);

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
            // console.log(letterPairs.get(chars[i] + chars[i + 1]))
            if (letterPairs.get(chars[i] + chars[i + 1]) === undefined)
                letterPairs.set(chars[i] + chars[i + 1], 1)
            else {
                // rule out overlapping
                if (i + 2 > chars.length || i - 1 < 0) break;

                if (chars[i] !== chars[i + 2]
                    || chars[i - 1] !== chars[i]
                    || chars[i + 1] !== chars[i + 2]
                    || chars[i + 1] !== chars[i - 1])
                    contains = true;

                break;
            }
        }
        var repeat = this.checkRepeat(chars);

        // console.log('repeat')
        // console.log(repeat)

        // console.log('contains')
        // console.log(contains)
        // console.log(letterPairs)

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