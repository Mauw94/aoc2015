import { Day } from "../day";
import { Md5 } from 'ts-md5';

class Day4 extends Day {

    constructor() {
        super(4);
    }

    solveForPartOne(input: string): string {
        var num = 0;
        var md5 = new Md5();
        md5.appendStr(input + num);
        var hash = md5.end() as string;
        while (hash.slice(0, 5) !== '00000') {
            num++;
            md5.appendStr(input + num);
            hash = md5.end() as string;

            hash = Md5.hashStr(input + num);
        }

        return num.toString();
    }

    solveForPartTwo(input: string): string {
        var num = 0;
        var md5 = new Md5();
        md5.appendStr(input + num);
        var hash = md5.end() as string;
        while (hash.slice(0, 6) !== '000000') {
            num++;
            md5.appendStr(input + num);
            hash = md5.end() as string;

            hash = Md5.hashStr(input + num);
        }

        return num.toString();
    }
}

export default new Day4;