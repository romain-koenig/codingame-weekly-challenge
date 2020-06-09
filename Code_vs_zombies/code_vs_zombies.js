const readline = () => "REMOVE THIS LINE";

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
exports.Coordinates = Coordinates;

const computeDistance = (positionA, positionB) => {
    const diffX = positionA.x - positionB.x;
    const diffY = positionA.y - positionB.y;
    return Math.floor(Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)));
}
exports.computeDistance = computeDistance;



let count = 300;

class Character {
    #position = null;
    #id = null;

    constructor(position, id) {
        this.#position = position;
        this.#id = id;
    }
    getPosition() {
        return this.#position;
    }
    getId() {
        return this.#id;
    }
    toString() {
        return `Position : ${this.#position}`;
    }
}


class Human extends Character {
    toString() {
        return 'Human - ' + super.toString();
    }
}
exports.Human = Human;

class Zombie extends Character {
    #destination = null;
    constructor(position, id, destination) {
        super(position, id);
        this.#destination = destination;
    }
    getDestination() {
        return this.#destination;
    }
    toString() {
        return 'Zombie - ' + super.toString() + ` - Destination : ${this.#destination}`;
    }
}
exports.Zombie = Zombie;

// game loop
while (true && count > 0) {

    count--;

    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const humanCount = parseInt(readline());

    const HumanList = [];
    const ZombieList = [];

    for (let i = 0; i < humanCount; i++) {
        var inputs = readline().split(' ');
        const humanId = parseInt(inputs[0]);
        const humanX = parseInt(inputs[1]);
        const humanY = parseInt(inputs[2]);
        const human = new Human(new Coordinates(humanX, humanY), humanId);
        HumanList.push(human);
    }
    
    
    const zombieCount = parseInt(readline());
    for (let i = 0; i < zombieCount; i++) {
        var inputs = readline().split(' ');
        const zombieId = parseInt(inputs[0]);
        const zombieX = parseInt(inputs[1]);
        const zombieY = parseInt(inputs[2]);
        const zombieXNext = parseInt(inputs[3]);
        const zombieYNext = parseInt(inputs[4]);
        const zombie = new Zombie(new Coordinates(zombieX, zombieY), zombieId, new Coordinates(zombieXNext, zombieYNext));
        ZombieList.push(zombie)
    }
    
    HumanList.map(e => console.error(e.toString()));
    ZombieList.map(e => console.error(e.toString()));
    
    
    
    
    console.log('0 0');     // Your destination coordinates

}
