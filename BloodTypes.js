const readline = () => "TEST";


// ██╗   ██╗████████╗██╗██╗     ██╗████████╗██╗███████╗███████╗
// ██║   ██║╚══██╔══╝██║██║     ██║╚══██╔══╝██║██╔════╝██╔════╝
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║█████╗  ███████╗
// ██║   ██║   ██║   ██║██║     ██║   ██║   ██║██╔══╝  ╚════██║
// ╚██████╔╝   ██║   ██║███████╗██║   ██║   ██║███████╗███████║
//  ╚═════╝    ╚═╝   ╚═╝╚══════╝╚═╝   ╚═╝   ╚═╝╚══════╝╚══════╝


const dictGenesRightOrder = {
    AA: "AA",
    BB: "BB",
    OO: "OO",
    AB: "AB",
    BA: "AB",
    OB: "BO",
    BO: "BO",
    OA: "AO",
    AO: "AO",
    '++': "++",
    '+-': "+-",
    '--': "--",
    '-+': "+-",
};



const getBloodInfos = (blood) => {

    let values = blood.split('');
    let rhesus = values.pop();

    let bloodInfos = {};
    bloodInfos.bloodtype = values.join('');
    bloodInfos.rhesus = rhesus;
    return bloodInfos;
}
exports.getBloodInfos = getBloodInfos;

//usage = list.filter(onlyUnique)
const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}
exports.onlyUnique = onlyUnique;




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

const dictBloodtypeFromGenes = {
    AA: 'A',
    AO: 'A',
    BB: 'B',
    BO: 'B',
    OO: 'O',
    AB: 'AB',
}
exports.GetBloodtypeFromGenes = dictBloodtypeFromGenes;


const getPossibleGenesFromBloodtype = (bloodtype) => {

    let returnValue = []
    if (bloodtype === "A") {
        returnValue.push('AA');
        returnValue.push('AO');
    }
    if (bloodtype === "B") {
        returnValue.push('BB');
        returnValue.push('BO');
    }
    if (bloodtype === "O") {
        returnValue.push('OO');
    }
    if (bloodtype === "AB") {
        returnValue.push('AB');
    }

    let returnObject = {}
    returnObject.possibleGenes = returnValue;
    return returnObject;
}
exports.getPossibleGenesFromBloodtype = getPossibleGenesFromBloodtype;


const getPossibleGroupsFromPossibleGenes = (genes) => {
    let possibleGroups = [];

    for (let i = 0; i < genes.length; i++) {
        possibleGroups.push(dictBloodtypeFromGenes[genes[i]]);
    }
    return possibleGroups.filter(onlyUnique);
}
exports.getPossibleGroupsFromPossibleGenes = getPossibleGroupsFromPossibleGenes;


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
const getRhesusFromGenes = (gene) => {
    console.error(`getRhesusFromGenes - gene : ${gene}`)
    let x = gene[0] === '+' ? true : false;
    let y = gene[1] === '+' ? true : false;
    return x || y ? '+' : '-';
}
exports.getRhesusFromGenes = getRhesusFromGenes;

const getPossibleRhesusFromGenes = (genes) => {
    console.error(`getPossibleRhesusFromGenes - genes : ${genes}`);
    let possibleGenes = [];
    for (let i = 0; i < genes.length; i++) {
        possibleGenes.push(getRhesusFromGenes(genes[i]))
    }
    return possibleGenes.filter(onlyUnique);
}
exports.getPossibleRhesusFromGenes = getPossibleRhesusFromGenes

const getPossibleGenesFromRhesus = (rhesus) => {
    let returnValue = [];
    if (rhesus === '-') {
        returnValue.push('--');
    }
    else {
        returnValue.push('++');
        returnValue.push('+-');
    }

    let returnObject = {}
    returnObject.possibleRhesusGenes = returnValue;
    return returnObject;
}
exports.getPossibleGenesFromRhesus = getPossibleGenesFromRhesus;


//  ██████╗██╗  ██╗██╗██╗     ██████╗     ██╗███╗   ██╗███████╗ ██████╗ ███████╗
// ██╔════╝██║  ██║██║██║     ██╔══██╗    ██║████╗  ██║██╔════╝██╔═══██╗██╔════╝
// ██║     ███████║██║██║     ██║  ██║    ██║██╔██╗ ██║█████╗  ██║   ██║███████╗
// ██║     ██╔══██║██║██║     ██║  ██║    ██║██║╚██╗██║██╔══╝  ██║   ██║╚════██║
// ╚██████╗██║  ██║██║███████╗██████╔╝    ██║██║ ╚████║██║     ╚██████╔╝███████║
//  ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝╚═════╝     ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝ ╚══════╝

const getPossibleChildGroupGenesFromParentsGenes = (parent1GroupGenes, parent2GroupGenes) => {

    let possibleGenes = [];
    for (let i = 0; i < parent1GroupGenes.length; i++) {
        for (let j = 0; j < parent2GroupGenes.length; j++) {
            possibleGenes.push(dictGenesRightOrder[parent1GroupGenes[i][0].concat(parent2GroupGenes[j][0])]);
            possibleGenes.push(dictGenesRightOrder[parent1GroupGenes[i][0].concat(parent2GroupGenes[j][1])]);
            possibleGenes.push(dictGenesRightOrder[parent1GroupGenes[i][1].concat(parent2GroupGenes[j][0])]);
            possibleGenes.push(dictGenesRightOrder[parent1GroupGenes[i][1].concat(parent2GroupGenes[j][1])]);
        }
    }

    possibleGenes = possibleGenes.filter(onlyUnique);
    return possibleGenes;
}
exports.getPossibleChildGroupGenesFromParentsGenes = getPossibleChildGroupGenesFromParentsGenes;


const getPossibleChildRhesusGenesFromParentsGenes = (parent1RhesusGenes, parent2RhesusGenes) => {

    let possibleGenes = [];

    for (let i = 0; i < parent1RhesusGenes.length; i++) {
        for (let j = 0; j < parent2RhesusGenes.length; j++) {
            possibleGenes.push(dictGenesRightOrder[parent1RhesusGenes[i][0].concat(parent2RhesusGenes[j][0])]);
            possibleGenes.push(dictGenesRightOrder[parent1RhesusGenes[i][0].concat(parent2RhesusGenes[j][1])]);
            possibleGenes.push(dictGenesRightOrder[parent1RhesusGenes[i][1].concat(parent2RhesusGenes[j][0])]);
            possibleGenes.push(dictGenesRightOrder[parent1RhesusGenes[i][1].concat(parent2RhesusGenes[j][1])]);
        }
    }

    possibleGenes = possibleGenes.filter(onlyUnique);
    return possibleGenes;
}
exports.getPossibleChildRhesusGenesFromParentsGenes = getPossibleChildRhesusGenesFromParentsGenes;


//  █████╗ ██╗     ██╗         ██╗███╗   ██╗███████╗ ██████╗ ███████╗    ███████╗██████╗  ██████╗ ███╗   ███╗     ██████╗ ███████╗███╗   ██╗███████╗███████╗
// ██╔══██╗██║     ██║         ██║████╗  ██║██╔════╝██╔═══██╗██╔════╝    ██╔════╝██╔══██╗██╔═══██╗████╗ ████║    ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔════╝
// ███████║██║     ██║         ██║██╔██╗ ██║█████╗  ██║   ██║███████╗    █████╗  ██████╔╝██║   ██║██╔████╔██║    ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ███████╗
// ██╔══██║██║     ██║         ██║██║╚██╗██║██╔══╝  ██║   ██║╚════██║    ██╔══╝  ██╔══██╗██║   ██║██║╚██╔╝██║    ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ╚════██║
// ██║  ██║███████╗███████╗    ██║██║ ╚████║██║     ╚██████╔╝███████║    ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║    ╚██████╔╝███████╗██║ ╚████║███████╗███████║
// ╚═╝  ╚═╝╚══════╝╚══════╝    ╚═╝╚═╝  ╚═══╝╚═╝      ╚═════╝ ╚══════╝    ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝     ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝


const getCompleteGroupList = (possibleGroups, possibleRhesus) => {

    let answers = []
    for (let i = 0; i < possibleGroups.length; i++) {
        for (let j = 0; j < possibleRhesus.length; j++) {
            answers.push(possibleGroups[i].concat(possibleRhesus[j]));
        }
    }
    answers.sort((a, b) => a-b);
    return answers;
}
exports.getCompleteGroupList = getCompleteGroupList;


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
        getAnswerForChild(parent1, parent2);
    }
    else if (parent1 === '?') {
        
    }

    console.error(`--------------------`);

}



function getAnswerForChild(parent1, parent2) {
    let parent1bloodInfos = getBloodInfos(parent1);
    let parent2bloodInfos = getBloodInfos(parent2);
    console.error(parent1bloodInfos);
    console.error(parent2bloodInfos);
    let parent1Groupgenes = getPossibleGenesFromBloodtype(parent1bloodInfos.bloodtype);
    console.error(`Possible genes for parent 1 : ${parent1Groupgenes.possibleGenes}`);
    let parent1RhesusGenes = getPossibleGenesFromRhesus(parent1bloodInfos.rhesus);
    console.error(`Possible Rhesus genes for parent 1 : ${parent1RhesusGenes.possibleRhesusGenes}`);
    let parent2Groupgenes = getPossibleGenesFromBloodtype(parent2bloodInfos.bloodtype);
    console.error(`Possible genes for parent 2 : ${parent2Groupgenes.possibleGenes}`);
    let parent2RhesusGenes = getPossibleGenesFromRhesus(parent2bloodInfos.rhesus);
    console.error(`Possible Rhesus genes for parent 2 : ${parent2RhesusGenes.possibleRhesusGenes}`);
    let possibleChildGroupGenes = getPossibleChildGroupGenesFromParentsGenes(parent1Groupgenes.possibleGenes, parent2Groupgenes.possibleGenes);
    console.error(`possibleChildGroupGenes : ${possibleChildGroupGenes}`);
    let possibleChildRhesusGenes = getPossibleChildRhesusGenesFromParentsGenes(parent1RhesusGenes.possibleRhesusGenes, parent2RhesusGenes.possibleRhesusGenes);
    console.error(`possibleChildRhesusGenes : ${possibleChildRhesusGenes}`);
    let possibleChildRhesus = getPossibleRhesusFromGenes(possibleChildRhesusGenes);
    console.error(`possibleChildRhesus : ${possibleChildRhesus}`);
    let possibleChildGroup = getPossibleGroupsFromPossibleGenes(possibleChildGroupGenes);
    console.error(`possibleChildGroup : ${possibleChildGroup}`);
    let answer = getCompleteGroupList(possibleChildGroup, possibleChildRhesus);
    console.log(answer.join(" "));
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//console.log('answer');
