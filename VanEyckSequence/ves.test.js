let line = 0;

const readline = () => {
    line++;

    switch (line) {
        case 1: return "0"; break;
        case 2: return "15"; break;
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

let next = A1;

const tab = [];
for (let i = 0; i < N; i++) {
    next = addAValue(next);
}

console.error(tab);


console.log(tab[N - 1]);


function addAValue(val) {
    let returnValue = tab.filter(e => e === val).length;
    if (returnValue != 0) {
        returnValue = tab.length - tab.lastIndexOf(val);
    }
    tab.push(val);
    return returnValue;
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

