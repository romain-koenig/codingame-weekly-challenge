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

let gameOK = true;
for (let i = 0; i < gameGrid.length && gameOK === true; i++) {
    let numbers = [];
    for (let j = 0; j < gameGrid[i].length; j++) {
        numbers.push(gameGrid[i][j]);
    }
    if (numbers.sort().toString() !== [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
        gameOK = false;
    }
}

for (let i = 0; i < gameGrid.length && gameOK === true; i++) {
    let numbers = [];
    for (let j = 0; j < gameGrid[i].length; j++) {
        numbers.push(gameGrid[j][i]);
    }
    if (numbers.sort().toString() !== [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
        gameOK = false;
    }
}
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        let numbers = [];
        for (let j = 1; j <= 3; j++) {
            for (let l = 1; l <= 3; l++) {
                numbers.push(gameGrid[3 * i + j - 1][3 * k + l - 1]);
            }
        }
        if (numbers.sort().toString() !== [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) {
            gameOK = false;
        }
    }
}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(gameOK);
