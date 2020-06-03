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



test('Genes A and A gives bloodtype A', () => {
    expect(bloodtypes.GetBloodtypeFromGenes('A', 'A')).toStrictEqual({ bloodtype: 'A' });
});

test('Genes A and O gives bloodtype A', () => {
    expect(bloodtypes.GetBloodtypeFromGenes('A', 'O')).toStrictEqual({ bloodtype: 'A' });
});

test('Genes B and B gives bloodtype B', () => {
    expect(bloodtypes.GetBloodtypeFromGenes('B', 'B')).toStrictEqual({ bloodtype: 'B' });
});

test('Genes B and O gives bloodtype B', () => {
    expect(bloodtypes.GetBloodtypeFromGenes('B', 'O')).toStrictEqual({ bloodtype: 'B' });
});

test('Genes O and O gives bloodtype O', () => {
    expect(bloodtypes.GetBloodtypeFromGenes('O', 'O')).toStrictEqual({ bloodtype: 'O' });
});

test('Genes A and B gives bloodtype AB', () => {
    expect(bloodtypes.GetBloodtypeFromGenes('B', 'A')).toStrictEqual({ bloodtype: 'AB' });
});






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
    expect(bloodtypes.getRhesusFromGenes('+', '+')).toBe('+');
});
test('Genes - twice gives Rhesus -', () => {
    expect(bloodtypes.getRhesusFromGenes('-', '-')).toBe('-');
});
test('Genes + and - gives Rhesus +', () => {
    expect(bloodtypes.getRhesusFromGenes('+', '-')).toBe('+');
});
test('Genes - and + gives Rhesus +', () => {
    expect(bloodtypes.getRhesusFromGenes('-', '+')).toBe('+');
});


//If we only pass one value, should still work
test('Genes + only gives Rhesus +', () => {
    expect(bloodtypes.getRhesusFromGenes('+')).toBe('+');
});

test('Genes - only gives Rhesus -', () => {
    expect(bloodtypes.getRhesusFromGenes('-')).toBe('-');
});



test('Rhesus - comes from gene - twice', () => {
    expect(bloodtypes.getPossibleGenesFromRhesus('-')).toStrictEqual({ possibleRhesusGenes: ['-'] });
});
test('Rhesus + comes from gene + twice or +/-', () => {
    expect(bloodtypes.getPossibleGenesFromRhesus('+')).toStrictEqual({ possibleRhesusGenes: ['+', '-'] });
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



test('Only unique values / filter', () => {
    expect(['AA', 'AB', 'AA', 'AB', 'AO'].filter(bloodtypes.onlyUnique)).toStrictEqual(['AA', 'AB', 'AO']);
})
