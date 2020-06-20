/**
 * CODINGAME : 
 * https://www.codingame.com/ide/puzzle/the-last-crusade-episode-1
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // number of columns.
const H = parseInt(inputs[1]); // number of rows.

const gameGrid = [];
for (let i = 0; i < H; i++) {
    const LINE = readline().split(' '); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    gameGrid.push(LINE);
}

console.error(gameGrid);

const EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).


// game loop
while (true) {
    var inputs = readline().split(' ');
    const XI = parseInt(inputs[0]);
    const YI = parseInt(inputs[1]);
    const POS = inputs[2];

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
    console.log('0 0');
}

