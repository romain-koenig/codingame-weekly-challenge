const ff = require('./ForestFire')


test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)

const fireGrid = [
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1]
    ]
    ;

test('Is Canadair a good choice in [0][0] ? (false)', () => {
    expect(ff.checkGrid(fireGrid, "CANADAIR", 0, 0)).toBe(false);
}
)

test('Is Canadair a good choice in [0][0] ? (true)', () => {
    expect(ff.checkGrid(fireGrid, "CANADAIR", 3, 3)).toBe(true);
}
)
test('Is Helicopter a good choice in [1][3] ? (true)', () => {
    expect(ff.checkGrid(fireGrid, "HELICOPTER", 3, 1)).toBe(true);
}
)
test('Is Helicopter a good choice in [0][0] ? (false)', () => {
    expect(ff.checkGrid(fireGrid, "HELICOPTER", 0, 0)).toBe(false);
}
)