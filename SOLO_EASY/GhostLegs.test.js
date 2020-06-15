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

for (let i = 0; i < H; i++) {
    const line = readline().replace("  ", " ").replace("--", "-");
    console.error(line);
    gameGrid.push(line);
}

//Bottom row
const downValues = readline().split('  ');


// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let answer = [];

answer.map(e => console.log(e));


test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)


test('Testing header values', () => {
    const expectedHederValues = ["A", "B", "C"]
    expect(headValues).toStrictEqual(expectedHederValues);
}
)

test('Testing groung values', () => {
    const expectedDownValues = [["| | |"],
    ["|-| |"],
    ["| |-|"],
    ["| |-|"],
    ["| | |"]];
    expect(downValues).toStrictEqual(expectedDownValues);
}
)

test('Checking the final answer of the game', () => {
    const expectedAnswer = ["A2", "B1", "C3"]
    expect(answer).toStrictEqual(expectedAnswer);
}
)