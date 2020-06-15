/*
 * Simulate input from real situation
 */


let line = -1;
const readline = () => {
    line++;
    switch (line) {
        case 0:
            return "7 7";
            break;
        case 1:
            return "A  B  C";
            break;
        case 2:
            return "|  |  |";
            break;
        case 3:
            return "|--|  |";
            break;
        case 4:
            return "|  |--|";
            break;
        case 5:
            return "|  |--|";
            break;
        case 6:
            return "|  |  |";
            break;
        case 7:
            return "1  2  3";
            break;
        default:
            break;
    }
}


// ██████╗ ███████╗ ██████╗ ██╗███╗   ██╗
// ██╔══██╗██╔════╝██╔════╝ ██║████╗  ██║
// ██████╔╝█████╗  ██║  ███╗██║██╔██╗ ██║
// ██╔══██╗██╔══╝  ██║   ██║██║██║╚██╗██║
// ██████╔╝███████╗╚██████╔╝██║██║ ╚████║
// ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝
                                      


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);


//reading top row
const headValues = readline().split('  ');

//reading the game grid
const gameGrid = [];

for (let i = 0; i < H - 2; i++) {
    const line = readline().replace(/  /g, " ").replace(/--/g, "-");
    gameGrid.push(line);
}

//Bottom row
const downValues = readline().split('  ');


// translate read values into directional values
const size = gameGrid.length;
const width = headValues.length
let chemins = [];
for (let i = 0; i < size; i++) {
    let chemin = new Array(0, 0, 0);

    chemins.push(chemin);

    for (let j = 0; j < width - 1; j++) {
        console.error(`i - ${i}, j - ${j}`);
        let currentChar = gameGrid[i].substring(2 * j + 1, 2 * j + 2);
        console.error(currentChar);
        if (currentChar === "-") {
            console.error(`CurrentChar is -`)
            console.error(chemins);
            chemins[i][j] = 1;
            chemins[i][j + 1] = -1;
        }
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let answer = [];

gameGrid.map(e => console.error(e));
chemins.map(e => console.error(e));
answer.map(e => console.log(e));


// ███████╗███╗   ██╗██████╗ 
// ██╔════╝████╗  ██║██╔══██╗
// █████╗  ██╔██╗ ██║██║  ██║
// ██╔══╝  ██║╚██╗██║██║  ██║
// ███████╗██║ ╚████║██████╔╝
// ╚══════╝╚═╝  ╚═══╝╚═════╝ 
                          

test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)


test('Testing header values', () => {
    const expectedHederValues = ["A", "B", "C"];
    expect(headValues).toStrictEqual(expectedHederValues);
}
)
test('Testing ground values', () => {
    const expectedGroundValues = ["1", "2", "3"];
    expect(downValues).toStrictEqual(expectedGroundValues);
}
)

test('Testing grid values', () => {
    const expectedGridValues = ["| | |",
        "|-| |",
        "| |-|",
        "| |-|",
        "| | |"];
    expect(gameGrid).toStrictEqual(expectedGridValues);
}
)

test('Check chemins', () => {
    const expectedValues = [
        [0, 0, 0],
        [1, -1, 0],
        [0, 1, -1],
        [0, 1, -1],
        [0, 0, 0]];
    expect(chemins).toStrictEqual(expectedValues);
})

test('Checking the final answer of the game', () => {
    const expectedAnswer = ["A2", "B1", "C3"]
    expect(answer).toStrictEqual(expectedAnswer);
}
)