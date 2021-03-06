let line = 0;

const readline = () => {
    line++;

    switch (line) {
        case 1: return "200"; break;
        case 2: return "6"; break;
        case 3: return "1000 15"; break;
        case 4: return "3000 10"; break;
        case 5: return "4000 30"; break;
        case 6: return "5000 30"; break;
        case 7: return "6000 5"; break;
        case 8: return "7000 10"; break;
    }
}

// ██████╗ ███████╗ ██████╗ ██╗███╗   ██╗
// ██╔══██╗██╔════╝██╔════╝ ██║████╗  ██║
// ██████╔╝█████╗  ██║  ███╗██║██╔██╗ ██║
// ██╔══██╗██╔══╝  ██║   ██║██║██║╚██╗██║
// ██████╔╝███████╗╚██████╔╝██║██║ ╚████║
// ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝


class TrafficLight {
    position = 0;
    duration = 0;
    constructor(position, duration) {
        this.position = position;
        this.duration = duration;
    }
    /**
     * Check wether the traffic Light is green at any given time
     * @param {time at which the car runs into the light} time 
     */
    isGreen(time) {
        //traffic light is green between 0 and duration
        // red during duration and 2 * duration
        // 2 * duration and 3 * duration
        // and so on...
        // console.error(`Time : ${time}`)
        const cycleNumber = Math.floor(time / this.duration);
        return cycleNumber % 2 === 0;
    }

}

//Starting Game loop

const maxSpeed = parseInt(readline());
const lightCount = parseInt(readline());
console.error(maxSpeed);
console.error(lightCount);
const trafficLights = [];
for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    console.error(inputs.join(' '));
    const distance = parseInt(inputs[0]);
    const duration = parseInt(inputs[1]);
    trafficLights.push(new TrafficLight(distance, duration))
}

let solved = false;
let currentSpeed = 0;


for (currentSpeed = maxSpeed; solved == false && currentSpeed > 0; currentSpeed--) {
    if (currentSpeed === 60) {
        console.error(`This should be OK`);
    }
    //t(s)=d(m)/v(m/s)
    solved = trafficLights.map(tl => tl.isGreen(36 * tl.position / (10 * currentSpeed))).reduce((a, e) => a && e);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const answer = currentSpeed + 1;

console.log(answer);


// ███████╗███╗   ██╗██████╗ 
// ██╔════╝████╗  ██║██╔══██╗
// █████╗  ██╔██╗ ██║██║  ██║
// ██╔══╝  ██║╚██╗██║██║  ██║
// ███████╗██║ ╚████║██████╔╝
// ╚══════╝╚═╝  ╚═══╝╚═════╝ 


test('Testing a Traffic light under different conditions', () => {
    let tl = new TrafficLight(10, 20);
    expect(tl.isGreen(10)).toBe(true);
    expect(tl.isGreen(30)).toBe(false);
    expect(tl.isGreen(50)).toBe(true);

    tl = new TrafficLight(10, 40);
    expect(tl.isGreen(10)).toBe(true);
    expect(tl.isGreen(30)).toBe(true);
    expect(tl.isGreen(39.9999)).toBe(true);
    expect(tl.isGreen(40.0001)).toBe(false);
    expect(tl.isGreen(50)).toBe(false);

}
)

test('Test GAME 07', () => {
    expect(answer).toBe(60);
}
)