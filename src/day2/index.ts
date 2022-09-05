import { Day } from "../day";

class Day2 extends Day {

    constructor() {
        super(2);
    }

    solveForPartOne(input: string): string {
        var totalSquareFeet = 0;
        var dimensions = input.split('\n');
        for (let i = 0; i < dimensions.length; i++) {
            totalSquareFeet += this.calculateSquareFeet(dimensions[i]);
        }
        return totalSquareFeet.toString();
    }

    solveForPartTwo(input: string): string {
        var totalRibbonNeeded = 0;
        var dimensions = input.split('\n');
        for (let i = 0; i < dimensions.length; i++) {
            totalRibbonNeeded += this.calculateRibbon(dimensions[i]);
        }
        return totalRibbonNeeded.toString();
    }

    calculateSquareFeet(dimension: string): number {
        var wlh: number[] = dimension.replace('\r', '').split('x').map(x => parseInt(x)); // contains [l, w, h]
        var dim1 = wlh[0] * wlh[1];
        var dim2 = wlh[1] * wlh[2]
        var dim3 = wlh[0] * wlh[2]
        var slack = Math.min(dim1, dim2, dim3);

        return 2 * dim1 + 2 * dim2 + 2 * dim3 + slack;
    }

    calculateRibbon(dimension: string): number {
        var wlh: number[] = dimension.replace('\r', '').split('x').map(x => parseInt(x)); // contains [l, w, h]
        var bow = wlh[0] * wlh[1] * wlh[2];
        var smallestSides = this.getTwoSmallestSides(wlh);
        var ribbonWrap = 2 * smallestSides[0] + 2 * smallestSides[1];

        return ribbonWrap + bow;
    }

    getTwoSmallestSides(arr: number[]): number[] {
        var min = Infinity, secondMin = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                secondMin = min;
                min = arr[i];
            } else if (arr[i] < secondMin) {
                secondMin = arr[i];
            }
        }

        return [min, secondMin];
    }
}

export default new Day2;