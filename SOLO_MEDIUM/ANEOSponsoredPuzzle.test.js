let line = 0;

const readline = () => {
    line++;

    switch (line) {
        case 1: return "50"; break;
        case 2: return "1"; break;
        case 3: return "200 15"; break;
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

    isGreen(time) {
        return true;
    }
    
}

const speed = parseInt(readline());
const lightCount = parseInt(readline());
for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    const distance = parseInt(inputs[0]);
    const duration = parseInt(inputs[1]);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const answer = 50;

console.log(answer);


// ███████╗███╗   ██╗██████╗ 
// ██╔════╝████╗  ██║██╔══██╗
// █████╗  ██╔██╗ ██║██║  ██║
// ██╔══╝  ██║╚██╗██║██║  ██║
// ███████╗██║ ╚████║██████╔╝
// ╚══════╝╚═╝  ╚═══╝╚═════╝ 



test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)

test('Testing a Traffic light under different conditions', () => {
    tl = new TrafficLight(10, 20);
    expect(tl.isGreen(10)).toBe(true);

}
)

test('Test GAME 1', () => {
    expect(answer).toBe(50);
}
)
