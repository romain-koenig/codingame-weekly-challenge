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
    let chemin = new Array(width);
    chemin.fill(0);

    chemins.push(chemin);

    for (let j = 0; j < width - 1; j++) {
        let currentChar = gameGrid[i].substring(2 * j + 1, 2 * j + 2);
        if (currentChar === "-") {
            chemins[i][j] = 1;
            chemins[i][j + 1] = -1;
        }
    }
}

//Now that we have the paths, calculate answer

const answer = [];

for (let i = 0; i < headValues.length; i++) {
    let firstChar = headValues[i];
    let lastChar = "X";
    let currentIndex = i
    for (let j = 0; j < chemins.length; j++) {
        console.error(`i - ${i}, j - ${j}, currentIndex - ${currentIndex}`)
        console.error(chemins[j])
        currentIndex += chemins[j][currentIndex];
        lastChar = downValues[currentIndex];

    }
    answer.push(firstChar + lastChar)
    console.error(' ')
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');


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