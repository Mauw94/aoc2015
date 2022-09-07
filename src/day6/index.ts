import { Day } from "../day";

class Day6 extends Day {

    constructor() {
        super(6);
    }

    grid: Light[][] = [];
    grid2: Lightp2[][] = [];
    lights: number = 1000;

    solveForPartOne(input: string): string {
        for (let i = 0; i < this.lights; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.lights; j++)
                this.grid[i][j] = new Light();
        }

        var lines = input.split('\n');
        console.log(lines);
        lines.forEach(line => {
            this.solveP1(line);
        });

        // this.solve('toggle 0,0 through 999,0')
        var litLights = 0;
        for (let i = 0; i < this.lights; i++) {
            for (let j = 0; j < this.lights; j++) {
                if (this.grid[i][j].toggle)
                    litLights++;
            }
        }
        return litLights.toString();
    }

    solveForPartTwo(input: string): string {
        for (let i = 0; i < this.lights; i++) {
            this.grid2[i] = [];
            for (let j = 0; j < this.lights; j++)
                this.grid2[i][j] = new Lightp2();
        }

        var lines = input.split('\n');
        console.log(lines);
        lines.forEach(line => {
            this.solveP2(line);
        });

        //this.solveP2('toggle 0,0 through 999,999')
        var totalBrightness = 0;
        for (let i = 0; i < this.lights; i++) {
            for (let j = 0; j < this.lights; j++) {
                totalBrightness += this.grid2[i][j].brightness
            }
        }
        return totalBrightness.toString();
    }

    private solveP1(line: string) {
        var commands = line.split(' ');
        console.log(commands)
        if (commands.includes('on')) {
            console.log('on')

            var xpoints = commands[2].split(',');
            var ypoints = commands[4].split(',');
            var ypoint1 = ypoints[0];
            var ypoint2 = ypoints[1]
            var xpoint1 = xpoints[0];
            var xpoint2 = xpoints[1];

            this.toggleLights(+xpoint1, +xpoint2, +ypoint1, +ypoint2, 'on');
        }
        else if (commands.includes('off')) {
            console.log('off')

            var xpoints = commands[2].split(',');
            var ypoints = commands[4].split(',');
            var ypoint1 = ypoints[0];
            var ypoint2 = ypoints[1]
            var xpoint1 = xpoints[0];
            var xpoint2 = xpoints[1];

            this.toggleLights(+xpoint1, +xpoint2, +ypoint1, +ypoint2, 'off');
        } else {
            console.log('toggle')
            var xpoints = commands[1].split(',');
            var ypoints = commands[3].split(',');
            var ypoint1 = ypoints[0];
            var ypoint2 = ypoints[1]
            var xpoint1 = xpoints[0];
            var xpoint2 = xpoints[1];

            this.toggleLights(+xpoint1, +xpoint2, +ypoint1, +ypoint2, 'toggle');
        }
    }

    private toggleLights(xpoint1: number, xpoint2: number, ypoint1: number, ypoint2: number, toggleOption: string) {
        var onOrOff: boolean = false;
        var toggle: boolean = false;
        if (toggleOption === 'on') onOrOff = true;
        if (toggleOption === 'off') onOrOff = false;
        if (toggleOption === 'toggle') toggle = true;

        for (let i = 0; i < this.lights; i++) {
            for (let j = 0; j < this.lights; j++) {
                if (i >= +xpoint1
                    && i <= ypoint1
                    && j >= xpoint2
                    && j <= ypoint2) {
                    if (toggle)
                        this.grid[i][j].toggle = !this.grid[i][j].toggle;
                    else
                        this.grid[i][j].toggle = onOrOff;
                }
            }
        }
    }

    private solveP2(line: string) {
        var commands = line.split(' ');
        console.log(commands)
        if (commands.includes('on')) {
            console.log('on')

            var xpoints = commands[2].split(',');
            var ypoints = commands[4].split(',');
            var ypoint1 = ypoints[0];
            var ypoint2 = ypoints[1]
            var xpoint1 = xpoints[0];
            var xpoint2 = xpoints[1];

            this.toggleP2(+xpoint1, +xpoint2, +ypoint1, +ypoint2, 'on');
        }
        else if (commands.includes('off')) {
            console.log('off')

            var xpoints = commands[2].split(',');
            var ypoints = commands[4].split(',');
            var ypoint1 = ypoints[0];
            var ypoint2 = ypoints[1]
            var xpoint1 = xpoints[0];
            var xpoint2 = xpoints[1];

            this.toggleP2(+xpoint1, +xpoint2, +ypoint1, +ypoint2, 'off');
        } else {
            console.log('toggle')
            var xpoints = commands[1].split(',');
            var ypoints = commands[3].split(',');
            var ypoint1 = ypoints[0];
            var ypoint2 = ypoints[1]
            var xpoint1 = xpoints[0];
            var xpoint2 = xpoints[1];

            this.toggleP2(+xpoint1, +xpoint2, +ypoint1, +ypoint2, 'toggle');
        }
    }

    private toggleP2(xpoint1: number, xpoint2: number, ypoint1: number, ypoint2: number, toggleOption: string) {
        var onOrOff: boolean = false;
        var toggle: boolean = false;
        if (toggleOption === 'on') onOrOff = true;
        if (toggleOption === 'off') onOrOff = false;
        if (toggleOption === 'toggle') toggle = true;

        for (let i = 0; i < this.lights; i++) {
            for (let j = 0; j < this.lights; j++) {
                if (i >= +xpoint1
                    && i <= ypoint1
                    && j >= xpoint2
                    && j <= ypoint2) {
                    if (toggle)
                        this.grid2[i][j].brightness += 2;
                    if (onOrOff)
                        this.grid2[i][j].brightness++;
                    if (!onOrOff && !toggle) {
                        if (this.grid2[i][j].brightness - 1 >= 0)
                            this.grid2[i][j].brightness--;
                    }
                }
            }
        }
    }
}

export default new Day6;

class Light {
    toggle: boolean = false;
}

class Lightp2 {
    brightness: number = 0;
}