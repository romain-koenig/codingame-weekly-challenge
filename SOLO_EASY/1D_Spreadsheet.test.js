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
 * Program starts here
 */

const OPERATIONS = {
    VALUE: "VALUE",
    ADD: "ADD",
    SUBSTRACT: "SUB",
    MULTIPLY: "MULT",
}

const N = parseInt(readline());
let spread = []
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const operation = inputs[0];
    const arg1 = sanytizeInput(1);
    const arg2 = sanytizeInput(2);
    spread.push({
        operation: operation,
        arg1: arg1,
        arg2: arg2
    })
}

test('Check if line initialized as it should', () => {
    expect(spread).toStrictEqual([{
        operation: OPERATIONS.VALUE,
        arg1: 3,
        arg2: null
    },
    {
        operation: OPERATIONS.ADD,
        arg1: "$0",
        arg2: 4
    }])
})

for (let i = 0; i < N; i++) {
    switch (spread[i].operation) {
        case OPERATIONS.VALUE:
            spread[i].outputValue = spread[i].arg1;
            break;
        case OPERATIONS.ADD:
            spread[i].outputValue = spread[i].arg1 + spread[i].arg2;
            break;
        case OPERATIONS.MULTIPLY:
            spread[i].outputValue = spread[i].arg1 * spread[i].arg2;
            break;
        case OPERATIONS.SUBSTRACT:
            spread[i].outputValue = spread[i].arg1 - spread[i].arg2;
            break;

        default:
            break;
    }
}

for (let i = 0; i < N; i++) {

    console.log(spread[i].outputValue);
}





test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)
function sanytizeInput(index) {
    return inputs[index] === "_" ? null : (inputs[index].startsWith('$') ? inputs[index] : parseInt(inputs[index]));
}

