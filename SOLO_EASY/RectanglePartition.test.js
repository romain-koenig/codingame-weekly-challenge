
let line = 0;
const readline = () => {
    line++;
    switch (line) {
        case 1:
            return "10000 9000 123 201";
            break;
        case 2:
            return "1 14 79 126 390 506 573 690 747 778 798 887 896 907 912 1026 1122 1172 1193 1223 1380 1557 1693 1759 1840 2050 2063 2279 2321 2332 2396 2468 2514 2664 2803 2813 2823 2886 2913 3131 3363 3426 3580 3583 3780 3979 3981 4014 4102 4198 4284 4355 4666 4693 4708 4718 4926 5055 5094 5121 5292 5298 5299 5372 5406 5532 5634 5800 5801 5835 5838 5851 5875 6183 6305 6358 6359 6433 6479 6589 6600 6609 6635 6766 6774 6906 6940 6957 6978 7004 7008 7086 7226 7413 7442 7525 7536 7573 7625 7693 7721 8004 8113 8252 8300 8303 8385 8390 8523 8526 8688 8733 8766 9027 9075 9170 9196 9198 9223 9331 9497 9910 9945";
            break;
        case 3:
            return "59 60 63 128 132 146 183 249 270 303 380 387 467 606 643 663 682 707 728 734 799 851 1019 1078 1105 1116 1122 1126 1167 1237 1327 1402 1436 1439 1635 1674 1718 1751 1817 1864 1865 1871 1921 1995 2001 2085 2089 2214 2274 2282 2399 2442 2443 2447 2564 2569 2577 2875 2937 2988 2992 3017 3121 3162 3202 3216 3226 3228 3259 3416 3426 3443 3475 3795 3852 3879 3920 3993 4038 4039 4052 4137 4207 4243 4248 4251 4270 4328 4346 4354 4369 4379 4389 4396 4413 4426 4477 4491 4501 4508 4531 4533 4544 4659 4666 4720 4769 4846 4877 4977 5036 5143 5254 5348 5416 5425 5452 5468 5523 5580 5601 5611 5613 5620 5714 5722 5724 5748 5759 5794 5803 5927 5979 6042 6101 6115 6168 6177 6184 6230 6269 6336 6343 6416 6428 6709 6756 6786 6813 6895 6919 6945 6971 7099 7114 7142 7179 7241 7267 7381 7401 7412 7416 7422 7427 7456 7514 7519 7533 7555 7577 7597 7735 7739 7745 7777 7780 7859 7913 7917 7948 7984 7999 8000 8035 8051 8071 8143 8155 8228 8392 8480 8490 8575 8653 8677 8731 8754 8830 8867 8887";
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

let previousValue = 0
const widths = [];
for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    widths.push(x - previousValue);
    previousValue = x;
}
widths.push(w - previousValue);

inputs = readline().split(' ');
console.error(inputs.join(' '));
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
                const cumulatedWidth = widths.slice(i, i + k + 1).reduce((a, b) => a + b, 0);
                const cumulatedHeight = heights.slice(j, j + l + 1).reduce((a, b) => a + b, 0);


                
                // console.error(`checking square starting in ${i}, ${j} and ending in ${i + k}, ${j + l} : ${cumulatedWidth} x ${cumulatedHeight}`);

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
    expect(answer).toBe(22281);
})