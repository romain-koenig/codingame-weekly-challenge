const readline = () => "REMOVE THIS LINE";

const inVsCode = true;

/**
 * Save humans, destroy zombies!
 **/

 
class Coordinates {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `[${this.x} - ${this.y}]`
    }

    isEqual(coordinates) {
        console.error(`Comparing ${coordinates} and ${this}`);
        let returnValue = coordinates.x == this.x && coordinates.y == this.y;
        console.error(`${coordinates.x} == ${this.x} ? --> ${coordinates.x == this.x} `);
        console.error(`${coordinates.y} == ${this.y} ? --> ${coordinates.y == this.y} `);
        console.error(`${returnValue} `);
        return returnValue;
    }
}



const computeDistance = () => {

}

let count = 300;

// game loop
while (true && count > 0) {

    count--;

    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const humanCount = parseInt(readline());
    for (let i = 0; i < humanCount; i++) {
        var inputs = readline().split(' ');
        const humanId = parseInt(inputs[0]);
        const humanX = parseInt(inputs[1]);
        const humanY = parseInt(inputs[2]);
    }
    const zombieCount = parseInt(readline());
    for (let i = 0; i < zombieCount; i++) {
        var inputs = readline().split(' ');
        const zombieId = parseInt(inputs[0]);
        const zombieX = parseInt(inputs[1]);
        const zombieY = parseInt(inputs[2]);
        const zombieXNext = parseInt(inputs[3]);
        const zombieYNext = parseInt(inputs[4]);
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    console.log('0 0');     // Your destination coordinates

}
