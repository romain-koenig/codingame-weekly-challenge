const tlc = require('./TheLastCrusadeEpisode2')


test('First Test', () => {
    expect(true).toBe(true);
} )


test(`Testing BLOC 1`, () => {
    expect(tlc.tileTypes[1].get(tlc.DIRECTIONS.LEFT)).toStrictEqual(tlc.DIRECTIONS.DOWN);
    expect(tlc.tileTypes[1].get(tlc.DIRECTIONS.TOP)).toStrictEqual(tlc.DIRECTIONS.DOWN);
    expect(tlc.tileTypes[1].get(tlc.DIRECTIONS.RIGHT)).toStrictEqual(tlc.DIRECTIONS.DOWN);
})


test(`Testing BLOC 2`, () => {
    expect(tlc.tileTypes[2].get(tlc.DIRECTIONS.LEFT)).toStrictEqual(tlc.DIRECTIONS.RIGHT);
    expect(tlc.tileTypes[2].get(tlc.DIRECTIONS.RIGHT)).toStrictEqual(tlc.DIRECTIONS.LEFT);
})

test('Check next position', () => {
    const gameGrid = [[0, 3, 0], [0, 3, 0], [0, 3, 0]];
    const currentPosition = new tlc.Position(0, 1);
    const currentDirection = tlc.DIRECTIONS.TOP;

    expect(tlc.computeNextPosition(gameGrid, 
        currentPosition.getX(), 
        currentPosition.getY(), currentDirection)).toStrictEqual(new tlc.Position(1, 1));
})