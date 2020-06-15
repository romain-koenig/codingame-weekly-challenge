/**
 * Simulate input from real situation
 */


let line = 0;
const readline = () => {
    line++;
    switch (line) {
        case 1:
            return "2";
            break;
        case 2:
            return "VALUE 3 _";
            break;
        case 3:
            return "ADD $0 4";
            break;
        default:
            break;
    }
}



/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
for (let i = 0; i < H; i++) {
    const line = readline();
    console.error(line);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log('answer');


test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)
