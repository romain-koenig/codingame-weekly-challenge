const bloodtypes = require('./BloodTypes.js');



test('Get Bloodtype and Rhesus from string AB+ : should be AB and +', () => {
    expect(bloodtypes.getBloodInfos('AB+')).toStrictEqual({
        bloodtype: 'AB',
        rhesus: '+'
    })
})
test('Get Bloodtype and Rhesus from string O- : should be O and -', () => {
    expect(bloodtypes.getBloodInfos('O-')).toStrictEqual({
        bloodtype: 'O',
        rhesus: '-'
    })
})





test('Bloodtype A comes from gene A and gene O or twice gene A', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('A')).toStrictEqual({ possibleGenes: ['AA', 'AO'] });
});
test('Bloodtype B comes from gene B and gene O or twice gene B', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('B')).toStrictEqual({ possibleGenes: ['BB', 'BO'] });
});
test('Bloodtype O comes from gene O twice', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('O')).toStrictEqual({ possibleGenes: ['OO'] });
});
test('Bloodtype AB comes from gene A and gene B', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('AB')).toStrictEqual({ possibleGenes: ['AB'] });
});






test('Genes + twice gives Rhesus +', () => {
    expect(bloodtypes.getRhesusFromGenes('++')).toBe('+');
});
test('Genes - twice gives Rhesus -', () => {
    expect(bloodtypes.getRhesusFromGenes('--')).toBe('-');
});
test('Genes + and - gives Rhesus +', () => {
    expect(bloodtypes.getRhesusFromGenes('+-')).toBe('+');
});
test('Genes - and + gives Rhesus +', () => {
    expect(bloodtypes.getRhesusFromGenes('-+')).toBe('+');
});


//If we only pass one value, should still work
test('Genes + only gives Rhesus +', () => {
    expect(bloodtypes.getRhesusFromGenes('+')).toBe('+');
});

test('Genes - only gives Rhesus -', () => {
    expect(bloodtypes.getRhesusFromGenes('-')).toBe('-');
});



test('Rhesus - comes from gene - twice', () => {
    expect(bloodtypes.getPossibleGenesFromRhesus('-')).toStrictEqual({ possibleRhesusGenes: ['--'] });
});
test('Rhesus + comes from gene + twice or +/-', () => {
    expect(bloodtypes.getPossibleGenesFromRhesus('+')).toStrictEqual({ possibleRhesusGenes: ['++', '+-'] });
});


test('Parents with genes AA, AB can have child AA or AB', () => {
    expect(bloodtypes.getPossibleChildGroupGenesFromParentsGenes(['AA'], ['AB'])).toStrictEqual(['AA', 'AB']);
})

test('Parents with genes AA, OO can have child AO', () => {
    expect(bloodtypes.getPossibleChildGroupGenesFromParentsGenes(['AA'], ['OO'])).toStrictEqual(['AO']);
})
test('Parents with genes AA, AO can have child AO, OO', () => {
    expect(bloodtypes.getPossibleChildGroupGenesFromParentsGenes(['AA'], ['AO'])).toStrictEqual(['AA', 'AO']);
})


test('Parents with genes AA or BB - and AO can have child AA, AO, AB, BO', () => {
    expect(bloodtypes.getPossibleChildGroupGenesFromParentsGenes(['AA', 'BB'], ['AO'])).toStrictEqual(['AA', 'AO', 'AB', 'BO']);
})


test('Only unique values / filter', () => {
    expect(['AA', 'AB', 'AA', 'AB', 'AO'].filter(bloodtypes.onlyUnique)).toStrictEqual(['AA', 'AB', 'AO']);
})


test('Parents with rhesus genes ++ and +- and AO can have child ++ and +-', () => {
    expect(bloodtypes.getPossibleChildRhesusGenesFromParentsGenes(['++'], ['+-'])).toStrictEqual(['++', '+-']);
})



test('With possible rhesus genes ++ and +-, only rhesus + is possible', () => {
    expect(bloodtypes.getPossibleRhesusFromGenes(['++', '+-'])).toStrictEqual(['+']);
})
test('With possible rhesus genes ++ and +-, only rhesus + is possible', () => {
    expect(bloodtypes.getPossibleRhesusFromGenes(['--'])).toStrictEqual(['-']);
})
test('With possible rhesus genes ++ and ---, rhesus + and - are both possible', () => {
    expect(bloodtypes.getPossibleRhesusFromGenes(['++', '--'])).toStrictEqual(['+', '-']);
})


test('With possible group genes AA and AO, group possible = only A', () => {
    expect(bloodtypes.getPossibleGroupsFromPossibleGenes(['AA', 'AO'])).toStrictEqual(['A']);
})


test('With possible group genes AA and BB, group possible = A, B', () => {
    expect(bloodtypes.getPossibleGroupsFromPossibleGenes(['AA', 'BB'])).toStrictEqual(['A', 'B']);
})


test('With groups A, B, AB and Rhesus +, -, answers are A+, A-, B+, B-, AB+, AB-', () => {
    expect(bloodtypes.getCompleteGroupList(['A', 'B', 'AB'], ['+', '-'])).toStrictEqual(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']);
})



//////////////////////////


test('Complete functionnal test : given 2 parents A- and 0+ get all possible combinations for child (A+ A- O+ O-)', () => {
    expect(bloodtypes.getAnswerForChild('A-', 'O+')).toStrictEqual(['A+', 'A-', 'O+', 'O-']);
})



test('Complete functionnal test : given a parent A- and a child A+ get all possible combinations for other parent (A+ A- O+ O-)', () => {
    expect(bloodtypes.getAnswerForParent('A-', 'A+')).toStrictEqual(['A+', 'AB+', 'B+', 'O+']);
})


test('Some results are impossible : given a parent AB- and a child O- >> no other parent combination', () => {
    expect(bloodtypes.getAnswerForParent('AB-', 'O-')).toStrictEqual([]);
})

