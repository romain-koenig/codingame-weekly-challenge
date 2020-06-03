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
    expect(bloodtypes.genesToBloodType('A', 'A')).toStrictEqual({ bloodtype: 'A' });
});

test('Genes A and O gives bloodtype A', () => {
    expect(bloodtypes.genesToBloodType('A', 'O')).toStrictEqual({ bloodtype: 'A' });
});

test('Genes B and B gives bloodtype B', () => {
    expect(bloodtypes.genesToBloodType('B', 'B')).toStrictEqual({ bloodtype: 'B' });
});

test('Genes B and O gives bloodtype B', () => {
    expect(bloodtypes.genesToBloodType('B', 'O')).toStrictEqual({ bloodtype: 'B' });
});

test('Genes O and O gives bloodtype O', () => {
    expect(bloodtypes.genesToBloodType('O', 'O')).toStrictEqual({ bloodtype: 'O' });
});

test('Genes A and B gives bloodtype AB', () => {
    expect(bloodtypes.genesToBloodType('B', 'A')).toStrictEqual({ bloodtype: 'AB' });
});






test('Bloodtype A comes from gene A and gene O or twice gene A', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('A')).toStrictEqual({ possibleGenes: [['A', 'A'], ['A', 'O']] });
});
test('Bloodtype B comes from gene B and gene O or twice gene B', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('B')).toStrictEqual({ possibleGenes: [['B', 'B'], ['B', 'O']] });
});
test('Bloodtype O comes from gene O twice', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('O')).toStrictEqual({ possibleGenes: [['O', 'O']] });
});
test('Bloodtype AB comes from gene A and gene B', () => {
    expect(bloodtypes.getPossibleGenesFromBloodtype('AB')).toStrictEqual({ possibleGenes: [['A', 'B']] });
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



test('Rhesus - comes from gene - twice', () => {
    expect(bloodtypes.getPossibleGenesFromRhesus('-')).toStrictEqual({ possibleRhesusGenes: [['-', '-']] });
});
test('Rhesus + comes from gene + twice or +/-', () => {
    expect(bloodtypes.getPossibleGenesFromRhesus('+')).toStrictEqual({ possibleRhesusGenes: [['+', '+'], ['+', '-']] });
});