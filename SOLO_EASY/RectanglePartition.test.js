
let line = 0;
const readline = () => {
    line++;
    switch (line) {
        case 1:
            return "10 5 2 1";
            break;
        case 2:
            return "2 5";
            break;
        case 3:
            return "3";
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


var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
var inputs = readline().split(' ');

let previousValue = 0
const widths = [];
for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    widths.push(x - previousValue); 
    previousValue = x;
}
widths.push(w - previousValue);

var inputs = readline().split(' ');
const heights = [];
previousValue = 0
for (let i = 0; i < countY; i++) {
    const y = parseInt(inputs[i]);
    heights.push(y - previousValue);
    previousValue = y;
}
heights.push(h - previousValue);

console.error(widths.join(' '));
console.error(heights.join(' '));

let answer = 0;

for (let i = 0; i < widths.length; i++) {
    for (let j = 0; j < heights.length; j++) {
        // here we check every "starting point"
        for (let k = 0; k < widths.length - i; k++) {
            for (let l = 0; l < heights.length - j; l++) {
                // here we determine every ending point

                const sum = (accumulator, element) => { accumulator + element };
                const cumulatedWidth = widths.slice(i, i + k + 1).reduce((a, b)=> a + b,0);
                const cumulatedHeight = heights.slice(j, j + l + 1).reduce((a, b)=> a + b,0);

                console.error(`checking square starting in ${i}, ${j} and ending in ${i+k}, ${j+l} : ${cumulatedWidth} x ${cumulatedHeight}`);
                
                answer += cumulatedWidth === cumulatedHeight ? 1 : 0;

            }
        }
    }
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');




console.log(answer);


// ███████╗███╗   ██╗██████╗ 
// ██╔════╝████╗  ██║██╔══██╗
// █████╗  ██╔██╗ ██║██║  ██║
// ██╔══╝  ██║╚██╗██║██║  ██║
// ███████╗██║ ╚████║██████╔╝
// ╚══════╝╚═╝  ╚═══╝╚═════╝ 


test('Final test of Game 01', () => {
    expect(answer).toBe(4);
})