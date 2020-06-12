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


const BRIGADES = {
    CANADAIR: {
        NAME: "CANADAIR",
        USEFULLNESS: 6,
        GRIDSIZE: 3,
        WATERCAPACITY: 1500,
    },
    HELICOPTER: {
        NAME: "HELICOPTER",
        USEFULLNESS: 3,
        GRIDSIZE: 2,
        WATERCAPACITY: 1500,
    },
    SQUAD: {
        NAME: "SQUAD",
        USEFULLNESS: 1,
        GRIDSIZE: 1,
        WATERCAPACITY: 1500,
    },
}
exports.BRIGADES = BRIGADES;

const checkHowManyFiresPossible = (grid, brigade, x, y) => {

    let firesThaCanBeExtinguishedHere = 0;

    //console.error(`Will check for ${brigade.NAME} in grid[${x}][${y}] - size = ${brigade.GRIDSIZE}`)
    for (let k = 0; k < brigade.GRIDSIZE; k++) {
        for (let l = 0; l < brigade.GRIDSIZE; l++) {
            if (grid[x + k][y + l].fire === true) {
                //console.error(`found a fire to extinguish`);
                firesThaCanBeExtinguishedHere++;
            }
        }
    }

    return firesThaCanBeExtinguishedHere;
}
exports.checkHowManyFiresPossible = checkHowManyFiresPossible;


function findBestSpot(canadair, brigade) {
    for (let i = 0; i < L - brigade.GRIDSIZE + 1; i++) {
        for (let j = 0; j < L - brigade.GRIDSIZE + 1; j++) {
            let firesExtinguishedHere = checkHowManyFiresPossible(grid, brigade, i, j);
            if (firesExtinguishedHere > canadair.bestNbOfFires) {
                canadair.bestNbOfFires = firesExtinguishedHere;
                canadair.bestX = i;
                canadair.bestY = j;
            }
        }
    }
}


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
                fire: false
            };
        }
    }

    // Setup the grid
    const givenNumberOfFires = parseInt(readline()); // Amount of fires

    for (let i = 0; i < givenNumberOfFires; i++) {
        var inputs = readline().split(' ');
        const fireX = parseInt(inputs[0]); // X coordinate of fire
        const fireY = parseInt(inputs[1]); // Y coordinate of fire
        grid[fireX][fireY].fire = true
    }

    //Print the fire grid for debug purpose
    // for (let i = 0; i < L; i++) {
    //     console.error(grid[i].map(e => e.fire).join(' '));
    // }

    class fireBrigade {
        bestNbOfFires = 0;
        bestX = 0;
        bestY = 0;
    }

    let canadair = new fireBrigade();
    let helicopter = new fireBrigade();


    let squadMax = 0;


    let squadMaxX = 0;
    let squadMaxY = 0;

    findBestSpot(canadair, BRIGADES.CANADAIR);

    findBestSpot(helicopter, BRIGADES.HELICOPTER);


    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            let squadHere = checkHowManyFiresPossible(grid, BRIGADES.SQUAD, i, j);
            if (squadHere > squadMax) {
                squadMax = squadHere;
                squadMaxX = i;
                squadMaxY = j;
            }
        }
    }

    if (canadair.bestNbOfFires >= BRIGADES.CANADAIR.USEFULLNESS &&
        water >= BRIGADES.CANADAIR.WATERCAPACITY) {
        console.log(`C ${canadair.bestX} ${canadair.bestY}`);
    }

    else if (helicopter.bestNbOfFires >= BRIGADES.HELICOPTER.USEFULLNESS
        && water >= BRIGADES.HELICOPTER.WATERCAPACITY) {
        console.log(`H ${helicopter.bestX} ${helicopter.bestY}`);
    }

    else if (squadMax >= BRIGADES.SQUAD.USEFULLNESS
        && water >= BRIGADES.SQUAD.WATERCAPACITY) {
        console.log(`J ${squadMaxX} ${squadMaxY}`);
    }

    // Write the vehicle first letter (C=Canadair, H=Helicopter, J=SmokeJumpers) followed by the coordinates separated by a space
}


