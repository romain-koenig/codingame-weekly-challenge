
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


let inputs = readline().split(' ');
console.error(inputs.join(' '));
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
inputs = readline().split(' ');
console.error(inputs.join(' '));


const widths = [];
widths.push(0);
for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    widths.push(x);

}
widths.push(w);

inputs = readline().split(' ');
console.error(inputs.join(' '));
const heights = [];
heights.push(0);
for (let i = 0; i < countY; i++) {
    const y = parseInt(inputs[i]);
    heights.push(y);

}
heights.push(h);

console.error(widths.join(' '));
console.error(heights.join(' '));

let answer = 0;

for (let i = 0; i < widths.length; i++) {
    for (let j = 0; j < heights.length; j++) {
        // here we check every "starting point"
        for (let k = 1; k < widths.length - i; k++) {
            for (let l = 1; l < heights.length - j; l++) {
                // here we determine every ending point

                const currentWidth = widths[i + k] - widths[i];
                const currentHeight = heights[j + l] - heights[j];


                console.error(`checking square starting in ${i}, ${j} and ending in ${i + k}, ${j + l} : ${currentWidth} x ${currentHeight}`);

                answer += currentWidth === currentHeight ? 1 : 0;

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

const test = () => { "" }
test('Final test of Game 01', () => {
    expect(answer).toBe(4);
})