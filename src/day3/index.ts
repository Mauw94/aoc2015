import { Day } from "../day";

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Day3 extends Day {

    constructor() {
        super(3);
    }

    solveForPartOne(input: string): string {
        var locationsVisited = new Map<string, number>();
        var currentLocation = new Point(0, 0);
        locationsVisited.set(JSON.stringify(currentLocation), 1); // starting position

        for (let i = 0; i < input.length; i++) {
            currentLocation = this.move(input[i], currentLocation, locationsVisited);
        }

        var uniqueLocations = 0;
        for (let [key, value] of locationsVisited.entries()) {
            if (value === 1)
                uniqueLocations++
        }

        return uniqueLocations.toString();
    }

    solveForPartTwo(input: string): string {
        var locationsVisitedSanta = new Map<string, number>();
        var locationsVisitedRobot = new Map<string, number>();
        var currentLocationSanta = new Point(0, 0);
        var currentLocationRobot = new Point(0, 0);
        locationsVisitedSanta.set(JSON.stringify(currentLocationSanta), 1); // starting position
        locationsVisitedRobot.set(JSON.stringify(currentLocationRobot), 1); // starting position

        for (let i = 0; i < input.length; i++) {
            if (i % 2 === 0) {
                currentLocationSanta = this.move(input[i], currentLocationSanta, locationsVisitedSanta);
            } else {
                currentLocationRobot = this.move(input[i], currentLocationRobot, locationsVisitedRobot);
            }
        }

        var uniqueLocations = 0;
        for (let [key, value] of locationsVisitedSanta.entries()) {
            if (value === 1)
                uniqueLocations++
        }
        for (let [key, value] of locationsVisitedRobot.entries()) {
            if (!locationsVisitedSanta.has(key)) { // dont check the locations visited by Santa
                if (value === 1 && key !== JSON.stringify(new Point(0, 0))) // dont include starting pos of robot
                    uniqueLocations++
            }
        }

        return uniqueLocations.toString();
    }

    move(move: string, currentLocation: Point, visitedLocations: Map<string, number>): Point {
        switch (move) {
            case 'v':
                currentLocation = new Point(currentLocation.x, currentLocation.y - 1);
                break;
            case '^':
                currentLocation = new Point(currentLocation.x, currentLocation.y + 1);
                break;
            case '<':
                currentLocation = new Point(currentLocation.x - 1, currentLocation.y);
                break;
            case '>':
                currentLocation = new Point(currentLocation.x + 1, currentLocation.y);
                break;
        }

        if (!visitedLocations.has(JSON.stringify(currentLocation)))
            visitedLocations.set(JSON.stringify(currentLocation), 1);
        else
            visitedLocations.get(JSON.stringify(currentLocation))! + 1;

        return currentLocation;
    }
}

export default new Day3;