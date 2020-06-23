let line = 0;
const readline = () => {
    line++;
    switch (line) {
        case 1:
            return "3 3";
            break;


        default:
            return "TOO FAR !";
            break;
    }
}


/**
 * CODINGAME : 
 * https://www.codingame.com/ide/puzzle/the-last-crusade-episode-2
 **/

// ██╗   ██╗████████╗██╗██╗     ██╗████████╗██╗███████╗███████╗
// ██║   ██║╚══██╔══╝██║██║     ██║╚══██╔══╝██║██╔════╝██╔════╝
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║█████╗  ███████╗
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║██╔══╝  ╚════██║
// ╚██████╔╝   ██║   ██║███████╗██║   ██║   ██║███████╗███████║
// ╚═════╝    ╚═╝   ╚═╝╚══════╝╚═╝   ╚═╝   ╚═╝╚══════╝╚══════╝


class Position {
    #X = 0;
    #Y = 0;
    constructor(x, y) {
        this.#X = x;
        this.#Y = y;
    }
    getX() {
        return this.#X;
    }
    getY() {
        return this.#Y;
    }
    topString() {
        return `Position : ${this.#X} ; ${this.#Y}`;
    }
}

const DIRECTIONS = {
    TOP: "TOP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    ERROR: "ERROR",
}

const cles0 = [];
const cles1 = [[DIRECTIONS.TOP, DIRECTIONS.DOWN], [DIRECTIONS.RIGHT, DIRECTIONS.DOWN], [DIRECTIONS.LEFT, DIRECTIONS.DOWN]];
const cles2 = [[DIRECTIONS.LEFT, DIRECTIONS.RIGHT], [DIRECTIONS.RIGHT, DIRECTIONS.LEFT]];
const cles3 = [[DIRECTIONS.TOP, DIRECTIONS.DOWN]];
const cles4 = [[DIRECTIONS.TOP, DIRECTIONS.LEFT], [DIRECTIONS.RIGHT, DIRECTIONS.DOWN], [DIRECTIONS.LEFT, DIRECTIONS.ERROR]];
const cles5 = [[DIRECTIONS.LEFT, DIRECTIONS.DOWN], [DIRECTIONS.TOP, DIRECTIONS.RIGHT], [DIRECTIONS.RIGHT, DIRECTIONS.ERROR]];
const cles6 = [[DIRECTIONS.LEFT, DIRECTIONS.RIGHT], [DIRECTIONS.RIGHT, DIRECTIONS.LEFT], [DIRECTIONS.TOP, DIRECTIONS.ERROR]];
const cles7 = [[DIRECTIONS.TOP, DIRECTIONS.DOWN], [DIRECTIONS.RIGHT, DIRECTIONS.DOWN]];
const cles8 = [[DIRECTIONS.RIGHT, DIRECTIONS.DOWN], [DIRECTIONS.LEFT, DIRECTIONS.DOWN]];
const cles9 = [[DIRECTIONS.TOP, DIRECTIONS.DOWN], [DIRECTIONS.LEFT, DIRECTIONS.DOWN]];
const cles10 = [[DIRECTIONS.TOP, DIRECTIONS.LEFT], [DIRECTIONS.LEFT, DIRECTIONS.ERROR]];
const cles11 = [[DIRECTIONS.TOP, DIRECTIONS.RIGHT], [DIRECTIONS.RIGHT, DIRECTIONS.ERROR]];
const cles12 = [[DIRECTIONS.RIGHT, DIRECTIONS.DOWN]];
const cles13 = [[DIRECTIONS.LEFT, DIRECTIONS.DOWN]];

const tileTypes = {
    0: new Map(cles0),
    1: new Map(cles1),
    2: new Map(cles2),
    3: new Map(cles3),
    4: new Map(cles4),
    5: new Map(cles5),
    6: new Map(cles6),
    7: new Map(cles7),
    8: new Map(cles8),
    9: new Map(cles9),
    10: new Map(cles10),
    11: new Map(cles11),
    12: new Map(cles12),
    13: new Map(cles13),
}




const computeNextPosition = (gameGrid, X, Y, currentDirection) => {

    const tileType = gameGrid[Y][X];
    console.error(`Tile type = ${tileType}`)
    const nextTileDirection = tileTypes[tileType].get(currentDirection);
    switch (nextTileDirection) {
        case DIRECTIONS.DOWN:
            return new Position(X, Y + 1);
            // console.log(`${X} ${Y+1}`);
            break;
        case DIRECTIONS.LEFT:
            return new Position(X - 1, Y);
            // console.log(`${X-1} ${Y}`);
            break;
        case DIRECTIONS.RIGHT:
            return new Position(X + 1, Y);
            // console.log(`${X+1} ${Y}`);
            break;

        default:
            break;
    }
}

//  ██████╗  █████╗ ███╗   ███╗███████╗    ██╗███╗   ██╗██╗████████╗
// ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██║████╗  ██║██║╚══██╔══╝
// ██║  ███╗███████║██╔████╔██║█████╗      ██║██╔██╗ ██║██║   ██║   
// ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║██║╚██╗██║██║   ██║   
// ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ██║██║ ╚████║██║   ██║   
//  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝    ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   


var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // number of columns.
const H = parseInt(inputs[1]); // number of rows.

console.error(`W : ${W}`)
console.error(`H : ${H}`)

const gameGrid = [];
for (let i = 0; i < H; i++) {
    const LINE = readline().split(' '); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    gameGrid.push(LINE);
}

console.error(gameGrid);

const EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

// game loop
let count = 10000;
while (true && count > 0) {
    count--;
    var inputs = readline().split(' ');
    console.error(inputs);
    const XI = parseInt(inputs[0]);
    const YI = parseInt(inputs[1]);
    const currentPosition = new Position(XI, YI);
    const POS = inputs[2];

    const nextPosition = computeNextPosition(gameGrid, XI, YI, POS);

    console.log(`${nextPosition.getX()} ${nextPosition.getY()}`)

    // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
    //console.log(nextPosition.getX() + " " +nextPosition.getY());
}