const bloodtypes = require('./BloodTypes.js');



test('Genes A and A gives bloodtype A', () => {
    expect(bloodtypes.genesToBloodType('A', 'A')).toStrictEqual({bloodtype: 'A'});
});

test('Genes A and O gives bloodtype A', () => {
    expect(bloodtypes.genesToBloodType('A', 'O')).toStrictEqual({bloodtype: 'A'});
});

test('Genes B and B gives bloodtype B', () => {
    expect(bloodtypes.genesToBloodType('B', 'B')).toStrictEqual({bloodtype: 'B'});
});

test('Genes B and O gives bloodtype B', () => {
    expect(bloodtypes.genesToBloodType('B', 'O')).toStrictEqual({bloodtype: 'B'});
});

test('Genes O and O gives bloodtype O', () => {
    expect(bloodtypes.genesToBloodType('O', 'O')).toStrictEqual({bloodtype: 'O'});
});

test('Genes A and B gives bloodtype AB', () => {
    expect(bloodtypes.genesToBloodType('B', 'A')).toStrictEqual({bloodtype: 'AB'});
});




test('Bloodtype A comes from gene A and gene O or twice gene A', () => {
    expect(bloodtypes.bloodTypeToPossibleGenes('A')).toStrictEqual([['A', 'A'],['A', 'O']]);
});
test('Bloodtype B comes from gene B and gene O or twice gene B', () => {
    expect(bloodtypes.bloodTypeToPossibleGenes('B')).toStrictEqual([['B', 'B'],['B', 'O']]);
});
test('Bloodtype O comes from gene O twice', () => {
    expect(bloodtypes.bloodTypeToPossibleGenes('O')).toStrictEqual([['O', 'O']]);
});
test('Bloodtype AB comes from gene A and gene B', () => {
    expect(bloodtypes.bloodTypeToPossibleGenes('AB')).toStrictEqual([['A', 'B']]);
});
    


test('Bloodtype A comes from gene A and gene O or twice gene A', () => {
    expect(bloodtypes.bloodTypeToPossibleGenesObject('A')).toStrictEqual([['A', 'A'],['A', 'O']]);
});
test('Bloodtype B comes from gene B and gene O or twice gene B', () => {
    expect(bloodtypes.bloodTypeToPossibleGenesObject('B')).toStrictEqual([['B', 'B'],['B', 'O']]);
});
test('Bloodtype O comes from gene O twice', () => {
    expect(bloodtypes.bloodTypeToPossibleGenesObject('O')).toStrictEqual([['O', 'O']]);
});
test('Bloodtype AB comes from gene A and gene B', () => {
    expect(bloodtypes.bloodTypeToPossibleGenesObject('AB')).toStrictEqual([['A', 'B']]);
});
    





test('Genes + twice gives Rhesus +', () => {
    expect(bloodtypes.genesToRhesus('+', '+')).toBe('+');
});
test('Genes - twice gives Rhesus -', () => {
    expect(bloodtypes.genesToRhesus('-', '-')).toBe('-');
});
test('Genes + and - gives Rhesus +', () => {
    expect(bloodtypes.genesToRhesus('+', '-')).toBe('+');
});
test('Genes - and + gives Rhesus +', () => {
    expect(bloodtypes.genesToRhesus('-', '+')).toBe('+');
});




test('Rhesus - comes from gene - twice', () => {
    expect(bloodtypes.rhesusToGenes('-')).toStrictEqual([['-', '-']]);
});
test('Rhesus + comes from gene + twice or +/-', () => {
    expect(bloodtypes.rhesusToGenes('+')).toStrictEqual([['+', '+'], ['+', '-']]);
});