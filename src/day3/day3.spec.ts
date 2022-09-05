import day3 from './index';

describe('On Day 3', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day3.solveForPartOne('^>v<')).toBe('4');
    })
    it(`part1 is identity function`, ()=>{
        expect(day3.solveForPartOne('^v^v^v^v^v')).toBe('2');
    })

    it(`part2 is identity function`, ()=>{
        expect(day3.solveForPartTwo('^v')).toBe('3');
    })
    it(`part2 is identity function`, ()=>{
        expect(day3.solveForPartTwo('^>v<')).toBe('3');
    })
    it(`part2 is identity function`, ()=>{
        expect(day3.solveForPartTwo('^v^v^v^v^v')).toBe('11');
    })
    it(`part2 is identity function`, ()=>{
        expect(day3.solveForPartTwo('<><><><><><><><><><>')).toBe('21');
    })
});