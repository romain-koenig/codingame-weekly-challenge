/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const gameGrid = [];

for (let i = 0; i < 9; i++) {
    const gameLine = [];
    var inputs = readline().split(' ');
    for (let j = 0; j < 9; j++) {
        const n = parseInt(inputs[j]);
        gameLine.push(n);
    }
    gameGrid.push(gameLine);
}

console.error(gameGrid);

let gameOK = true;
for (let i = 0; i < gameGrid.length && gameOK === true; i++) {
    let somme = 0;
    for (let j = 0; j < gameGrid[j].length; j++) {
        somme += gameGrid[i][j];

    }
    if (somme !== 9) {
        gameOK = false;
    }
}

for (let i = 0; i < gameGrid.length && gameOK === true; i++) {
    let somme = 0;
    for (let j = 0; j < gameGrid[j].length; j++) {
        somme += gameGrid[j][i];

    }
    if (somme !== 9) {
        gameOK = false;
    }
}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(gameOK);
