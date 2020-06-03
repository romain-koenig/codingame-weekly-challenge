const readline = () => "TEST";


// ██╗   ██╗████████╗██╗██╗     ██╗████████╗██╗███████╗███████╗
// ██║   ██║╚══██╔══╝██║██║     ██║╚══██╔══╝██║██╔════╝██╔════╝
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║█████╗  ███████╗
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║██╔══╝  ╚════██║
// ╚██████╔╝   ██║   ██║███████╗██║   ██║   ██║███████╗███████║
//  ╚═════╝    ╚═╝   ╚═╝╚══════╝╚═╝   ╚═╝   ╚═╝╚══════╝╚══════╝

const getBloodInfos = (blood) => {

    let values = blood.split('');
    let rhesus = values.pop();

    let bloodInfos = {};
    bloodInfos.bloodtype = values.join('');
    bloodInfos.rhesus = rhesus;
    return bloodInfos;
}
exports.getBloodInfos = getBloodInfos;



// ██████╗ ██╗      ██████╗  ██████╗ ██████╗ ████████╗██╗   ██╗██████╗ ███████╗
// ██╔══██╗██║     ██╔═══██╗██╔═══██╗██╔══██╗╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝
// ██████╔╝██║     ██║   ██║██║   ██║██║  ██║   ██║    ╚████╔╝ ██████╔╝█████╗  
// ██╔══██╗██║     ██║   ██║██║   ██║██║  ██║   ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  
// ██████╔╝███████╗╚██████╔╝╚██████╔╝██████╔╝   ██║      ██║   ██║     ███████╗
// ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝    ╚═╝      ╚═╝   ╚═╝     ╚══════╝


/**
 * AA = A blood type
 * AO = A blood type
 * 
 * BB = B blood type
 * BO = B blood type
 * 
 * OO = O blood type
 * 
 * AB = AB blood type
 */

const genesToBloodType = (gene1, gene2) => {
    if (gene1 === 'A' && gene2 === 'A') { return { bloodtype: 'A' }; }

    if (gene1 === 'A' && gene2 === 'O') { return { bloodtype: 'A' }; }
    if (gene1 === 'O' && gene2 === 'A') { return { bloodtype: 'A' }; }

    if (gene1 === 'B' && gene2 === 'B') { return { bloodtype: 'B' }; }

    if (gene1 === 'B' && gene2 === 'O') { return { bloodtype: 'B' }; }
    if (gene1 === 'O' && gene2 === 'B') { return { bloodtype: 'B' }; }

    if (gene1 === 'O' && gene2 === 'O') { return { bloodtype: 'O' }; }

    if (gene1 === 'A' && gene2 === 'B') { return { bloodtype: 'AB' }; }
    if (gene1 === 'B' && gene2 === 'A') { return { bloodtype: 'AB' }; }
}
exports.genesToBloodType = genesToBloodType;


const getPossibleGenesFromBloodtype = (bloodtype) => {

    let returnValue = []
    if (bloodtype === "A") {
        returnValue.push(['A', 'A']);
        returnValue.push(['A', 'O']);
    }
    if (bloodtype === "B") {
        returnValue.push(['B', 'B']);
        returnValue.push(['B', 'O']);
    }
    if (bloodtype === "O") {
        returnValue.push(['O', 'O']);
    }
    if (bloodtype === "AB") {
        returnValue.push(['A', 'B']);
    }

    let returnObject = {}
    returnObject.possibleGenes = returnValue;
    return returnObject;
}
exports.getPossibleGenesFromBloodtype = getPossibleGenesFromBloodtype;

// ██████╗ ██╗  ██╗███████╗███████╗██╗   ██╗███████╗
// ██╔══██╗██║  ██║██╔════╝██╔════╝██║   ██║██╔════╝
// ██████╔╝███████║█████╗  ███████╗██║   ██║███████╗
// ██╔══██╗██╔══██║██╔══╝  ╚════██║██║   ██║╚════██║
// ██║  ██║██║  ██║███████╗███████║╚██████╔╝███████║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝

/**
 * ++ = Rh+
 * +- = Rh+
 * -- = Rh-
 */
const getRhesusFromGenes = (gene1, gene2) => {
    let x = gene1 === '+' ? true : false;
    let y = gene2 === '+' ? true : false;
    return x || y ? '+' : '-';
}
exports.getRhesusFromGenes = getRhesusFromGenes;


const getPossibleGenesFromRhesus = (rhesus) => {
    let returnValue = [];
    if (rhesus === '-') {
        returnValue.push(['-', '-']);
    }
    else {
        returnValue.push(['+', '+']);
        returnValue.push(['+', '-']);
    }

    let returnObject = {}
    returnObject.possibleRhesusGenes = returnValue;
    return returnObject;
}
exports.getPossibleGenesFromRhesus = getPossibleGenesFromRhesus;


// ██████╗ ██████╗  ██████╗  ██████╗ ██████╗  █████╗ ███╗   ███╗    ███████╗████████╗ █████╗ ██████╗ ████████╗███████╗    ██╗  ██╗███████╗██████╗ ███████╗
// ██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔══██╗████╗ ████║    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝    ██║  ██║██╔════╝██╔══██╗██╔════╝
// ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝███████║██╔████╔██║    ███████╗   ██║   ███████║██████╔╝   ██║   ███████╗    ███████║█████╗  ██████╔╝█████╗  
// ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ╚════██║    ██╔══██║██╔══╝  ██╔══██╗██╔══╝  
// ██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║    ███████║   ██║   ██║  ██║██║  ██║   ██║   ███████║    ██║  ██║███████╗██║  ██║███████╗
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝


const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const parent1 = inputs[0];
    const parent2 = inputs[1];
    const child = inputs[2];
    console.error(`parent1 - ${parent1}`);
    console.error(`parent2 - ${parent2}`);
    console.error(`child - ${child}`);

    if (child === '?') {
        let parent1bloodInfos = getBloodInfos(parent1);
        let parent2bloodInfos = getBloodInfos(parent2);

        let parent1genes = getPossibleGenesFromBloodtype(parent1bloodInfos.bloodtype)
        console.error(`Possible genes for parent 1 : ${parent1genes}`)

        let parent2genes = getPossibleGenesFromBloodtype(parent2bloodInfos.bloodtype)
        console.error(`Possible genes for parent 2 : ${parent2genes}`)

        console.error(parent1bloodInfos);
        console.error(parent2bloodInfos);

    }

    console.error(`--------------------`);

}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log('answer');
