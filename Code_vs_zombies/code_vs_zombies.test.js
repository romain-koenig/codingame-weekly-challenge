const cvz = require('./code_vs_zombies')


test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)


test('computing distance between point A (250, 620) and point B (129, 348) (should be 278)', () => {
    expect(cvz.computeDistance(new cvz.Coordinates(250, 620), new cvz.Coordinates(192, 348))).toEqual(278);
})
test('computing distance between point A (0, 899) and point B (544, 98) (should be 968)', () => {
    expect(cvz.computeDistance(new cvz.Coordinates(0, 899), new cvz.Coordinates(544, 98))).toEqual(968);
})

test('Creating a Human / checking Coordinates', () => {
    expect(new cvz.Human(new cvz.Coordinates(0, 899), 3).getPosition()).toStrictEqual(new cvz.Coordinates(0, 899));
})
test('Creating a Human / checking ID', () => {
    expect(new cvz.Human(new cvz.Coordinates(0, 899), 3).getId()).toStrictEqual(3);
})
test('Creating a Human / checking toString()', () => {
    expect(new cvz.Human(new cvz.Coordinates(0, 899), 3).toString()).toStrictEqual('Human - Position : [0 - 899]');
})


test('Creating a Zombie / checking Coordinates', () => {
    expect(new cvz.Zombie(new cvz.Coordinates(12, 37), 6).getPosition()).toStrictEqual(new cvz.Coordinates(12, 37));
})
test('Creating a Zombie / checking ID', () => {
    expect(new cvz.Zombie(new cvz.Coordinates(12, 37), 6).getId()).toStrictEqual(6);
})
test('Creating a Zombie / checking toString()', () => {
    expect(new cvz.Zombie(new cvz.Coordinates(12, 37), 6, new cvz.Coordinates(25, 12)).toString()).toStrictEqual('Zombie - Position : [12 - 37] - Destination : [25 - 12]');
})



test('computing distance between Human H (0, 899) and Zombie Z (544, 98) (should be 968)', () => {
    expect(
        cvz.computeDistance(new cvz.Human(new cvz.Coordinates(0, 899), 1).getPosition(),
            new cvz.Zombie(new cvz.Coordinates(544, 98), 2, new cvz.Coordinates(22, 102)).getPosition())).toEqual(968);
})