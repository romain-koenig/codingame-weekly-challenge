
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


const verticalLines = [];
verticalLines.push(0);
for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    verticalLines.push(x);

}
verticalLines.push(w);

inputs = readline().split(' ');
console.error(inputs.join(' '));
const horizontalLines = [];
horizontalLines.push(0);
for (let i = 0; i < countY; i++) {
    const y = parseInt(inputs[i]);
    horizontalLines.push(y);

}
horizontalLines.push(h);

let answer = 0;

const widths = [];
const heights = [];

for (let i = 0; i < verticalLines.length - 1; i++) {
    for (let k = 1; k < verticalLines.length - i; k++) {
        currentWidth = verticalLines[i + k] - verticalLines[i];
        console.error(`checking between vertical line ${i} and ${i + k} (current width = ${currentWidth})`);
        widths.push(currentWidth);
    }
}


for (let j = 0; j < horizontalLines.length - 1; j++) {
    for (let l = 1; l < horizontalLines.length - j; l++) {
        currentHeight = horizontalLines[j + l] - horizontalLines[j];
        console.error(`checking between horizontal line ${j} and ${j + l} (current width = ${currentHeight})`);
        heights.push(currentHeight);
    }
}

for (let index = 0; index < widths.length; index++) {
    const correspondances = heights.filter(w => w === widths[index]).length;
    answer += correspondances;
    console.error(`${index} - Width = ${widths[index]} - Found ${correspondances} correspondance(s)`)
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