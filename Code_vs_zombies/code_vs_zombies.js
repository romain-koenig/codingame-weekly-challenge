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

    add(coordinates) {
        return new Coordinates(this.x + coordinates.x, this.y + coordinates.y)
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

    #destination = null;
    #speed = 0;

    constructor(position, id, destination) {
        this.#position = position;
        this.#id = id;
        this.#destination = destination;
    }

    setSpeed(speed) {
        this.#speed = speed;
    }
    getPosition() {
        return this.#position;
    }
    getDestination() {
        return this.#destination;
    }
    getId() {
        return this.#id;
    }

    setDestination(destination) {
        this.#destination = destination;
    }

    toString() {
        return `Position : ${this.#position}`;
    }

    computeNextPosition() {
        const distanceToTarget = computeDistance(this.getPosition(), this.#destination);

        if (distanceToTarget <= this.#speed) {
            return this.#destination;
        }
        else {
            return new Coordinates(this.#position.x + Math.floor(((this.#destination.x - this.getPosition().x) * this.#speed) / distanceToTarget),
                this.#position.y + Math.floor(((this.#destination.y - this.getPosition().y) * this.#speed) / distanceToTarget));
        }
    }
}


class Human extends Character {

    constructor(...args) {
        super(...args);
    }

    toString() {
        return 'Human - ' + super.toString();
    }
}
exports.Human = Human;

class Zombie extends Character {
    #target = null;
    constructor(...args) {
        super(...args);
        this.setSpeed(400);
    }
    toString() {
        return 'Zombie - ' + super.toString() + ` - Destination : ${this.getDestination()}`;
    }
    setTarget(target) {
        this.#target = target;
    }
    getTarget() {
        return this.#target;
    }

    computeClosestTarget(humanList, player) {
        const distPlayer = computeDistance(this.getPosition(), player.getPosition());
        let idMin = -1;
        let distanceMinHuman = Infinity;
        for (let i = 0; i < humanList.length; i++) {
            let d = computeDistance(this.getPosition(), humanList[i].getPosition())
            console.error(`Distance : ${d}`);
            if (d < distanceMinHuman) {
                idMin = i;
                distanceMinHuman = d;
            }
        }
        if (distanceMinHuman < distPlayer) {
            const h = humanList[idMin];
            console.error(`returning Human : ${h.toString()}`);
            return h;
        }
        return player;
    }
}
exports.Zombie = Zombie;


class Player extends Character {
    constructor(...args) {
        super(...args);
        this.setSpeed(1000);
    }
    toString() {
        return 'Player - ' + super.toString() + ` - Destination : ${this.getDestination()}`;
    }
    getOrder() {
        return `${this.getDestination().x} ${this.getDestination().y}`;
    }
}
exports.Player = Player;

// game loop
while (true && count > 0) {

    count--;



    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const humanCount = parseInt(readline());

    const player = new Player(new Coordinates(x, y), 0);

    const humanList = [];
    const zombieList = [];

    for (let i = 0; i < humanCount; i++) {
        var inputs = readline().split(' ');
        const humanId = parseInt(inputs[0]);
        const humanX = parseInt(inputs[1]);
        const humanY = parseInt(inputs[2]);
        humanList.push(new Human(new Coordinates(humanX, humanY), humanId));
    }


    const zombieCount = parseInt(readline());
    for (let i = 0; i < zombieCount; i++) {
        var inputs = readline().split(' ');
        const zombieId = parseInt(inputs[0]);
        const zombieX = parseInt(inputs[1]);
        const zombieY = parseInt(inputs[2]);
        const zombieXNext = parseInt(inputs[3]);
        const zombieYNext = parseInt(inputs[4]);
        zombieList.push(new Zombie(new Coordinates(zombieX, zombieY), zombieId, new Coordinates(zombieXNext, zombieYNext)))
    }

    // Basic algo : only one Zombie, going for it
    let destination = new Coordinates(0, 0)
    if (zombieList.length === 1) {
        destination = zombieList[0].getPosition();
        player.setDestination(destination);
    }
    else if (zombieList.length > 1) {
        // More than ONE Zombie. Dumb algo : still go for the first in the list
        //destination = zombieList[0].getPosition();
        // a little less dumb, go where the zombie is going
        destination = zombieList[0].computeNextPosition();
        //No surprise, still same results, wins for every game except 10, 11, 13, 19

        player.setDestination(destination);

    }
    player.setDestination(destination);

    //DEBUG : list all relevant data
    // humanList.map(e => console.error(e.toString()));
    // zombieList.map(e => console.error(e.toString()));
    // console.error(player.toString())

    // Output of the game
    // console.log(player.getOrder());     // Your destination coordinates

}
