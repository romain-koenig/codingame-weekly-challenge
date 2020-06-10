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

test('Adding 2 coordinates : (5, 30) and (17, -12) -> (22, 18)', () => {
    const A = new cvz.Coordinates(5, 30);
    const B = new cvz.Coordinates(17, -12);
    expect(A.add(B)).toStrictEqual(new cvz.Coordinates(22, 18));
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
test('Creating a Zombie / checking TARGET', () => {
    const posH = new cvz.Coordinates(0, 899);
    const posZ = new cvz.Coordinates(12, 37);
    const destZ = new cvz.Coordinates(25, 12);
    const Z = new cvz.Zombie(posZ, 6, destZ);

    const H = new cvz.Human(posH, 1);
    Z.setTarget(H)

    expect(Z.getTarget()).toStrictEqual(H);
})


test('Creating a Player / checking Coordinates', () => {
    expect(new cvz.Player(new cvz.Coordinates(12, 37), 6).getPosition()).toStrictEqual(new cvz.Coordinates(12, 37));
})
test('Creating a Player / checking ID', () => {
    expect(new cvz.Player(new cvz.Coordinates(12, 37), 0).getId()).toStrictEqual(0);
})
test('Creating a Player / checking toString()', () => {
    expect(new cvz.Player(new cvz.Coordinates(12, 37), 6).toString()).toStrictEqual('Player - Position : [12 - 37] - Destination : undefined');
})
test('Creating a Player / checking getDestination()', () => {
    const P = new cvz.Player(new cvz.Coordinates(12, 37), 6);
    const D = new cvz.Coordinates(187, 2567);
    P.setDestination(D);
    expect(P.getDestination()).toStrictEqual(D);
})
test('Creating a Player / checking getOrder()', () => {
    let p = new cvz.Player(new cvz.Coordinates(12, 37), 6);
    p.setDestination(new cvz.Coordinates(25, 12));
    expect(p.getOrder()).toStrictEqual('25 12');
})


test('computing distance between Human H (0, 899) and Zombie Z (544, 98) (should be 968)', () => {
    expect(
        cvz.computeDistance(new cvz.Human(new cvz.Coordinates(0, 899), 1).getPosition(),
            new cvz.Zombie(new cvz.Coordinates(544, 98), 2, new cvz.Coordinates(22, 102)).getPosition())).toEqual(968);
})


test('Simulate Player next position - Player (0,0) Human H (0, 899) and Zombie Z (544, 98) - GOING RIGHT FOR THE ZOMBIE (CLOSE)', () => {
    const posH = new cvz.Coordinates(0, 899);
    const posZ = new cvz.Coordinates(544, 98);
    const posP = new cvz.Coordinates(0, 0);

    const H = new cvz.Human(posH, 1);
    const Z = new cvz.Zombie(posZ, 2, H.getPosition());
    const P = new cvz.Player(posP, 0);
    P.setDestination(Z.getPosition());

    expect(P.computeNextPosition()).toStrictEqual(Z.getPosition());
})



test('Simulate Player next position - Player (0,0) Human H (0, 899) and Zombie Z (544, 98) - GOING RIGHT FOR THE ZOMBIE (FAR)', () => {
    const posH = new cvz.Coordinates(0, 2899);
    const posZ = new cvz.Coordinates(2544, 298);
    const posP = new cvz.Coordinates(0, 0);

    const H = new cvz.Human(posH, 1);
    const Z = new cvz.Zombie(posZ, 2, H.getPosition());
    const P = new cvz.Player(posP, 0);
    P.setDestination(Z.getPosition());

    expect(cvz.computeDistance(P.computeNextPosition(), new cvz.Coordinates(993, 111))).toBeLessThan(20);
})



// test('Simulate Zombie next position - Player (0,0) Human H (0, 899) and Zombie Z (544, 98) - GOING RIGHT FOR THE HUMAN (FAR)', () => {
//     const posH = new cvz.Coordinates(0, 2899);
//     const posZ = new cvz.Coordinates(2544, 298);

//     const H = new cvz.Human(posH, 1);
//     const Z = new cvz.Zombie(posZ, 2, H.getPosition());

//     Z.setDestination(H.getPosition());
//     //console.error(Z.computeNextPosition());
//     expect(Z.computeNextPosition()).toStrictEqual(new cvz.Coordinates(2544-285, 298+279));
// })

test('Simulate Zombie next position - Player (0,0) Human H (500, 1000) and Zombie Z (544, 98) - GOING RIGHT FOR THE HUMAN (FAR)', () => {
    const posH = new cvz.Coordinates(500, 1000);
    const posZ = new cvz.Coordinates(857, 1715);

    const H = new cvz.Human(posH, 1);
    const Z = new cvz.Zombie(posZ, 2, H.getPosition());

    Z.setDestination(H.getPosition());
    console.error(`Next position : ${Z.computeNextPosition()}`);
    console.error(`Starting distance : ${cvz.computeDistance(posH, posZ)}`)
    expect(Z.computeNextPosition()).toStrictEqual(new cvz.Coordinates(678, 1357));
})


test('Simulate Zombie next position - Player (0,0) Human H (0, 899) and Zombie Z (544, 98) - GOING RIGHT FOR THE HUMAN (FAR)', () => {
    const posH = new cvz.Coordinates(0, 2899);
    const posZ = new cvz.Coordinates(2544, 298);

    const H = new cvz.Human(posH, 1);
    const Z = new cvz.Zombie(posZ, 2, H.getPosition());

    Z.setDestination(H.getPosition());
    console.error(Z.computeNextPosition());
    expect(cvz.computeDistance(Z.computeNextPosition(), posZ.add(new cvz.Coordinates(-285, 279)))).toBeLessThan(8);
})


test('Calculate Closest Human/Player (= Human 2)', () => {
    const posH1 = new cvz.Coordinates(10, 40);
    const posH2 = new cvz.Coordinates(20, 40);
    const posH3 = new cvz.Coordinates(25, 60);
    const posH4 = new cvz.Coordinates(20, 50);

    const posZ = new cvz.Coordinates(25, 20);
    const posP = new cvz.Coordinates(0, 20);

    const H1 = new cvz.Human(posH1, 1);
    const H2 = new cvz.Human(posH2, 2);
    const H3 = new cvz.Human(posH3, 3);
    const H4 = new cvz.Human(posH4, 4);

    const humanList = [];
    humanList.push(H1);
    humanList.push(H2);
    humanList.push(H3);
    humanList.push(H4);
    const Z = new cvz.Zombie(posZ, 0, H1.getPosition());
    const P = new cvz.Player(posP, 0);

    const returnValue = Z.computeClosestTarget(humanList, P);

    console.error(returnValue);

    expect(returnValue.getId()).toStrictEqual(H2.getId());
    expect(returnValue instanceof cvz.Human).toBe(true);

})

test('Calculate Closest Human/Player (= Player)', () => {
    const posH1 = new cvz.Coordinates(10, 40);
    const posH2 = new cvz.Coordinates(20, 40);
    const posH3 = new cvz.Coordinates(25, 60);
    const posH4 = new cvz.Coordinates(20, 50);

    const posZ = new cvz.Coordinates(25, 20);
    const posP = new cvz.Coordinates(20, 20);

    const H1 = new cvz.Human(posH1, 1);
    const H2 = new cvz.Human(posH2, 2);
    const H3 = new cvz.Human(posH3, 3);
    const H4 = new cvz.Human(posH4, 4);

    const humanList = [];
    humanList.push(H1);
    humanList.push(H2);
    humanList.push(H3);
    humanList.push(H4);
    const Z = new cvz.Zombie(posZ, 0, H1.getPosition());
    const P = new cvz.Player(posP, 0);

    const returnValue = Z.computeClosestTarget(humanList, P);

    console.error(returnValue);

    expect(returnValue.getId()).toStrictEqual(P.getId());
    expect(returnValue instanceof cvz.Player).toBe(true);

})