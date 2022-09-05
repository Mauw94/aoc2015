import { Day } from "../day";

class Day1 extends Day {

    constructor() {
        super(1);
    }

    solveForPartOne(input: string): string {
        var result = 0;
        var route = input.split('');
        for (let i = 0; i < route.length; i++) {
            if (route[i] === '(')
                result++;
            if (route[i] === ')')
                result--;
        }
        return result.toString();
    }

    solveForPartTwo(input: string): string {
        var result = 0;
        var hitBasementAtPos = 0;
        var route = input.split('');
        for (let i = 0; i < route.length; i++) {
            if (route[i] === '(')
                result++;
            if (route[i] === ')')
                result--;
            if (result === -1) {
                hitBasementAtPos = i + 1;
                return hitBasementAtPos.toString();
            }
        }

        return input;
    }

}

export default new Day1;