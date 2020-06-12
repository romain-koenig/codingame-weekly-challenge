const ff = require('./ForestFire')


test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)

const fireGrid = [
    [false, false, false, false, false, true],
    [false, false, false, false, false, false],
    [false, false, false, true, false, false],
    [false, true, true, true, false, false],
    [false, true, false, false, true, false],
    [false, false, false, false, true, true]
]
    ;

test('Is Canadair a good choice in [0][0] ? (no fires)', () => {
    expect(ff.checkHowManyFiresPossible(fireGrid, ff.BRIGADES.CANADAIR, 0, 0)).toEqual(0);
}
)

test('Is Canadair a good choice in [3][3] ? (4 fires)', () => {
    expect(ff.checkHowManyFiresPossible(fireGrid, ff.BRIGADES.CANADAIR, 3, 3)).toEqual(4);
}
)
test('Is Helicopter a good choice in [1][3] ? (3 fires)', () => {
    expect(ff.checkHowManyFiresPossible(fireGrid, ff.BRIGADES.HELICOPTER, 3, 1)).toEqual(3);
}
)
test('Is Helicopter a good choice in [0][0] ? (no fires)', () => {
    expect(ff.checkHowManyFiresPossible(fireGrid, ff.BRIGADES.HELICOPTER, 0, 0)).toEqual(0);
}
)
test('Is a squad a good choice in [5][5] ? (one fire)', () => {
    expect(ff.checkHowManyFiresPossible(fireGrid, ff.BRIGADES.SQUAD, 5, 5)).toEqual(1);
}
)
test('Is a squad a good choice in [5][5] ? (no fires)', () => {
    expect(ff.checkHowManyFiresPossible(fireGrid, ff.BRIGADES.SQUAD, 0, 0)).toEqual(0);
}
)