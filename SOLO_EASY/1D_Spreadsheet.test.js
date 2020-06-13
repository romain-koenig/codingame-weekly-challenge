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

    let arg1 = null, arg2 = null, arg1_index = null, arg2_index = null;

    arg1 = inputs[1] === "_" ? null : (inputs[1].startsWith('$') ? null : parseInt(inputs[1]));
    arg2 = inputs[2] === "_" ? null : (inputs[2].startsWith('$') ? null : parseInt(inputs[2]));

    arg1_index = inputs[1].startsWith('$') ? parseInt(inputs[1].substring(1)) : null;
    arg2_index = inputs[2].startsWith('$') ? parseInt(inputs[2].substring(1)) : null;

    spread.push({
        operation: operation,
        arg1: arg1,
        arg1_index: arg1_index,
        arg2: arg2,
        arg2_index: arg2_index,
        evaluated: false
    })
}


while (spread.reduce((acc, curr) => acc && curr.evaluated, true) == false) {

    for (let i = 0; i < spread.length; i++) {
        //We start by evaluating the easy ones
        if ((spread[i].operation === OPERATIONS.VALUE && spread[i].arg1 !== null)
            || (spread[i].arg1 !== null && spread[i].arg2 !== null)) {

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
            spread[i].evaluated = true;
        }
        //else, we try to retrieve data in an evaluated cell
        else {
            if (spread[i].arg1_index != null && spread[spread[i].arg1_index].evaluated == true) {
                spread[i].arg1 = spread[spread[i].arg1_index].outputValue;
            }
            if (spread[i].arg2_index != null && spread[spread[i].arg2_index].evaluated == true) {
                spread[i].arg2 = spread[spread[i].arg2_index].outputValue;
            }
        }
    }
    // we loop until everything is evaluated
}


// printing the results
for (let i = 0; i < N; i++) {

    console.log(spread[i].outputValue == -0 ? 0 : spread[i].outputValue);
}



test('Check if return value is OK', () => {
    expect(spread).toStrictEqual([{
        operation: OPERATIONS.VALUE,
        arg1: 3,
        arg1_index: null,
        arg2: null,
        arg2_index: null,
        outputValue: 3,
        evaluated: true,
    },
    {
        operation: OPERATIONS.ADD,
        arg1: 3,
        arg1_index: 0,
        arg2: 4,
        arg2_index: null,
        outputValue: 7,
        evaluated: true,
    }])
})


test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)
