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

for (let i = 0; i < N-1; i++) {
    next = addValueDict(next, i);
}

console.error(dict);

console.log(next);

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


test('GAME 01', () => {
    expect(tab[1]).toBe(0);
})

