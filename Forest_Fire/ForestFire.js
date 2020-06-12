let line = -1;
const readline = () => {
    line++;
    switch (line) {
        case 0:
            return "3";
            break;
        case 1:
            return "1200";
            break;
        case 2:
            return "1 0 0";
            break;
        case 3:
            return "0 1 0";
            break;
        case 4:
            return "0 0 0";
            break;
        default:
            break;
    }
}



// ██╗   ██╗████████╗██╗██╗     ██╗████████╗██╗███████╗███████╗
// ██║   ██║╚══██╔══╝██║██║     ██║╚══██╔══╝██║██╔════╝██╔════╝
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║█████╗  ███████╗
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║██╔══╝  ╚════██║
// ╚██████╔╝   ██║   ██║███████╗██║   ██║   ██║███████╗███████║
//  ╚═════╝    ╚═╝   ╚═╝╚══════╝╚═╝   ╚═╝   ╚═╝╚══════╝╚══════╝


const checkGrid = (grid, brigade, x, y) => {

    let fires = 0;
    let max = 0;

    switch (brigade) {
        case "CANADAIR":
            max = 3
            break;
        case "HELICOPTER":
            max = 2
            break;
        case "SQUAD":
            max = 1
            break;

        default:
            break;
    }
    console.error(`Will check for ${brigade} in grid[${x}][${y}] - max = ${max}`)
    for (let k = 0; k < max; k++) {
        for (let l = 0; l < max; l++) {
            if (grid[x + k][y + l].fire === true) {
                console.error(`found a fire to extinguish`);
                fires++;
            }
        }
    }

    return fires;
}
exports.checkGrid = checkGrid;


// ██╗███╗   ██╗██╗████████╗
// ██║████╗  ██║██║╚══██╔══╝
// ██║██╔██╗ ██║██║   ██║   
// ██║██║╚██╗██║██║   ██║   
// ██║██║ ╚████║██║   ██║   
// ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   

/**
 * Send your available units to put out those fires! Watch out for water supplies!
 **/

const L = parseInt(readline()); // Size of forest map
let water = parseInt(readline()); // Total amount of water available

const grid = new Array(L);
for (let i = 0; i < L; i++) {
    grid[i] = new Array(L)
}



let count = 300;


//  ██████╗  █████╗ ███╗   ███╗███████╗    ██╗      ██████╗  ██████╗ ██████╗ 
// ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██║     ██╔═══██╗██╔═══██╗██╔══██╗
// ██║  ███╗███████║██╔████╔██║█████╗      ██║     ██║   ██║██║   ██║██████╔╝
// ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║     ██║   ██║██║   ██║██╔═══╝ 
// ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ███████╗╚██████╔╝╚██████╔╝██║     
//  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     


while (true && count > 0) {

    count--;
    //reinit game grid
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            grid[i][j] = {
                fire: false,
                canadair: 0,
                helicopter: 0,
                squad: 0
            };
        }
    }

    // Setup the grid
    let givenNumberOfFires = parseInt(readline()); // Amount of fires

    for (let i = 0; i < givenNumberOfFires; i++) {
        var inputs = readline().split(' ');
        const fireX = parseInt(inputs[0]); // X coordinate of fire
        const fireY = parseInt(inputs[1]); // Y coordinate of fire
        grid[fireX][fireY].fire = true
    }

    //Print the fire grid for debug purpose
    for (let i = 0; i < L; i++) {
        console.error(grid[i].map(e => e.fire).join(' '));
    }

    let actionDone = false;


    const canadairCapacity = 2100;
    const helicopterCapacity = 1200;
    const squadCapacity = 600;

    let canadairMax = 0;
    let helicopterMax = 0;
    let squadMax = 0;

    let canadairMaxX = 0;
    let canadairMaxY = 0;
    let helicopterMaxX = 0;
    let helicopterMaxY = 0;
    let squadMaxX = 0;
    let squadMaxY = 0;

    for (let i = 0; i < L - 2; i++) {
        for (let j = 0; j < L - 2; j++) {
            let canadairHere = checkGrid(grid, "CANADAIR", i, j);
            grid[i][j].canadair = canadairHere;
            if (canadairHere > canadairMax) {
                canadairMax = canadairHere;
                canadairMaxX = i;
                canadairMaxY = j;
            }
        }
    }

    for (let i = 0; i < L - 1; i++) {
        for (let j = 0; j < L - 1; j++) {
            let helicopterHere = checkGrid(grid, "HELICOPTER", i, j);
            grid[i][j].helicopter = helicopterHere
            if (helicopterHere > helicopterMax) {
                helicopterMax = helicopterHere;
                helicopterMaxX = i;
                helicopterMaxY = j;

            }
        }
    }

    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            let squadHere = checkGrid(grid, "SQUAD", i, j);
            grid[i][j].squad = squadHere;
            if (squadHere > squadMax) {
                squadMax = squadHere;
                squadMaxX = i;
                squadMaxY = j;

            }
        }
    }

    if (canadairMax > 4 && water >= canadairCapacity) {
        console.log(`C ${canadairMaxX} ${canadairMaxY}`);
        givenNumberOfFires -= canadairMax;
    }

    else if (helicopterMax > 2 && water >= helicopterCapacity) {
        console.log(`H ${helicopterMaxX} ${helicopterMaxY}`);
        givenNumberOfFires -= helicopterMax;
    }

    else if (squadMax > 0 && water >= squadCapacity) {
        console.log(`J ${squadMaxX} ${squadMaxY}`);
        givenNumberOfFires -= squadMax;
    }





    // Write the vehicle first letter (C=Canadair, H=Helicopter, J=SmokeJumpers) followed by the coordinates separated by a space
}
