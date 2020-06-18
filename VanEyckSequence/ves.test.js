let line = 0;

const readline = () => {
    line++;

    switch (line) {
        case 1: return "0"; break;
        case 2: return "10"; break;
    }
}

// ██████╗ ███████╗ ██████╗ ██╗███╗   ██╗
// ██╔══██╗██╔════╝██╔════╝ ██║████╗  ██║
// ██████╔╝█████╗  ██║  ███╗██║██╔██╗ ██║
// ██╔══██╗██╔══╝  ██║   ██║██║██║╚██╗██║
// ██████╔╝███████╗╚██████╔╝██║██║ ╚████║
// ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝


const A1 = parseInt(readline());
const N = parseInt(readline());

let dict = new Map([])

console.error(`${A1} ${N}`);
let next = A1;
let nextOld = A1;

const tab = [];
for (let i = 0; i < N-1; i++) {
    next = addValueDict(next, i);
    nextOld = addAValue(nextOld);
}

console.error(dict);
console.error(tab);

console.log(next);
console.error(tab[N-1]);

function addAValue(val) {
    let returnValue = tab.filter(e => e === val).length;
    if (returnValue != 0) {
        returnValue = tab.length - tab.lastIndexOf(val);
    }
    tab.push(val);
    return returnValue;
}

function addValueDict(val, i) {
    
    if (dict.has(val)) {
        let newVal = i - dict.get(val);
        dict.set(val, i);
        return newVal;
    }
    else {
        dict.set(val, i);
        return 0;
    }
}


// ███████╗███╗   ██╗██████╗ 
// ██╔════╝████╗  ██║██╔══██╗
// █████╗  ██╔██╗ ██║██║  ██║
// ██╔══╝  ██║╚██╗██║██║  ██║
// ███████╗██║ ╚████║██████╔╝
// ╚══════╝╚═╝  ╚═══╝╚═════╝ 

const test = () => {}

test('GAME 01', () => {
    expect(tab[1]).toBe(0);
})

