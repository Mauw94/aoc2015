import day1 from './index';

describe('On Day 1', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day1.solveForPartOne('))(((((')).toBe('3');
    })

    it(`part2 is identity function`, ()=>{
        expect(day1.solveForPartTwo('()())')).toBe('5');
    })
});