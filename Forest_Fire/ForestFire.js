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

/**
 * Send your available units to put out those fires! Watch out for water supplies!
 **/

const L = parseInt(readline()); // Size of forest map
const water = parseInt(readline()); // Total amount of water available

const grid = new Array(L);
for (let i = 0; i < L; i++) {
    grid[i] = new Array(L)
}

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
    console.error(`Will check for ${brigade} in grid[${x}][${y}]`)
    for (let k = 0; k < max; k++) {
        for (let l = 0; l < max; l++) {
            if (grid[x + k][y + l] > 0) {
                fires++;
            }
        }
    }

    if (fires > max) {
        console.error(`SEEMS FINE for ${brigade} in [${x}][${y}]!`)
        return true;
    }
    return false;
}
exports.checkGrid = checkGrid;

let count = 30;
// game loop
while (true && count > 0) {

    count--;
    //reinit game grid
    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            grid[i][j] = 0;
        }
    }

    // Setup the grid
    const N = parseInt(readline()); // Amount of fires

    for (let i = 0; i < N; i++) {
        var inputs = readline().split(' ');
        const fireX = parseInt(inputs[0]); // X coordinate of fire
        const fireY = parseInt(inputs[1]); // Y coordinate of fire
        grid[fireX][fireY] = 1
    }

    //Print the fire grid for debug purpose
    for (let i = 0; i < L; i++) {
        console.error(grid[i].join(' '));
    }


    for (let i = 0; i < L - 2; i++) {
        for (let j = 0; j < L - 2; j++) {
            const canadairCapacity = 2100;
            const helicopterCapacity = 1200;
            const squadCapacity = 600;
            
            if (checkGrid(grid, "CANADAIR", i, j) && water >= canadairCapacity) {
                console.log(`C ${i} ${j}`);
                water -= canadairCapacity;
            }

            if (checkGrid(grid, "HELICOPTER", i, j) && water >= helicopterCapacity) {
                console.log(`H ${i} ${j}`);
                water -= helicopterCapacity;
            }

            if (checkGrid(grid, "SQUAD", i, j) && water >= squadCapacity) {
                console.log(`J ${i} ${j}`);
                water -= squadCapacity;
            }
        }
    }


    // Write the vehicle first letter (C=Canadair, H=Helicopter, J=SmokeJumpers) followed by the coordinates separated by a space
}
