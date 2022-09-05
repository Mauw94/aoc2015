import day2 from './index';

describe('On Day 2', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day2.solveForPartOne('2x3x4')).toBe('58');
    })

    it(`part2 is identity function`, ()=>{
        expect(day2.solveForPartTwo('2x3x4')).toBe('34');
    })

    it(`part2 is identity function`, ()=>{
        expect(day2.solveForPartTwo('1x1x10')).toBe('14');
    })
});