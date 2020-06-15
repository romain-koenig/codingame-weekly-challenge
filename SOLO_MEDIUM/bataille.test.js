let line = 0;
const readline = () => {
    line++;
    switch (line) {
        case 1:
            return "3";
            break;
        case 2:
            return "AD";
            break;
        case 3:
            return "KC";
            break;
        case 4:
            return "QC";
            break;
        case 5:
            return "3";
            break;
        case 6:
            return "KH";
            break;
        case 7:
            return "QS";
            break;
        case 8:
            return "JC";
            break;
        default:
            break;
    }
}


// ██████╗ ███████╗ ██████╗ ██╗███╗   ██╗
// ██╔══██╗██╔════╝██╔════╝ ██║████╗  ██║
// ██████╔╝█████╗  ██║  ███╗██║██╔██╗ ██║
// ██╔══██╗██╔══╝  ██║   ██║██║██║╚██╗██║
// ██████╔╝███████╗╚██████╔╝██║██║ ╚████║
// ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝


const cardWarValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
};

const cardTextValues = {
    2: "2,",
    3: "3,",
    4: "4,",
    5: "5,",
    6: "6,",
    7: "7,",
    8: "8,",
    9: "9,",
    10: "10",
    J: "Jest",
    Q: "Queen",
    K: "King",
    A: "Ace",
};

const cardColors = {
    C: "Club",
    S: "Spade",
    D: "Diamond",
    H: "Heart"
}




class Card {
    warValue = 0;
    color = "ERROR";
    faceValue = "ERROR"

    constructor(value, color) {
        this.faceValue = cardTextValues[value];
        this.warValue = cardWarValues[value];
        this.color = cardColors[color];
    }

    toString() {
        return `${this.faceValue} of ${this.color}`;
    }
}

class Deck {
    #deck = [];
    #defausse = [];
    #cardInGame = null;

    constructor(deck) {
        this.#deck = deck;
    }

    pioche() {
        this.#cardInGame = this.#deck.shift();
        return this.#cardInGame;
    }

    discard(number) {
        for (let i = 0; i < number; i++) {
            this.#defausse.push(this.#deck.pop());
        }
    }

    discardThree() {
        this.discard(3);
    }
    toString() {
        let deckDescription = [];
        for (let i = 0; i < this.#deck.length; i++) {
            deckDescription.push(this.#deck[i]);
        }
        return deckDescription.join(" - ");
    }
}

const battle = (card1, card2) => {
    console.error(`Battle between Card1 : ${card1} - Card2 : ${card2}`);
    
    console.error(`Card1.warValue - ${card1.warValue}`);
    console.error(`Card2.warValue - ${card2.warValue}`);

    const winningCard = card1.warValue > card2.warValue ? 1 : (card2.warValue > card1.warValue ? 2 : 0);
    const draw = card1.warValue === card2.warValue ? true : false;
    return {
        winningCard: winningCard,
        draw: draw
    };
}

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const startingDeck1 = [];
const startingDeck2 = [];

const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const card = readline().split(''); // the n cards of player 1
    const cardP1 = new Card(card[0], card[1]);
    startingDeck1.push(cardP1);
    console.error(`Card P1 : ${cardP1.toString()}`);
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const card = readline().split(''); // the m cards of player 2
    const cardP2 = new Card(card[0], card[1]);
    startingDeck2.push(new Card(card[0], card[1]));
    console.error(`Card P2 : ${cardP2.toString()}`);
}


const deck1 = new Deck(startingDeck1.copyWithin());
const deck2 = new Deck(startingDeck2.copyWithin());

//GAME LOOP STARTS HERE

gameOn = true;
while (gameOn) {

    console.error(deck1.toString());
    card1 = deck1.pioche();
    card2 = deck2.pioche();
    console.error(deck1.toString());

    gameOn = false;
}



// ███████╗███╗   ██╗██████╗ 
// ██╔════╝████╗  ██║██╔══██╗
// █████╗  ██╔██╗ ██║██║  ██║
// ██╔══╝  ██║╚██╗██║██║  ██║
// ███████╗██║ ╚████║██████╔╝
// ╚══════╝╚═╝  ╚═══╝╚═════╝ 




test('DOING NOTHING - JEST needs at least ONE test', () => {
    expect(true).toBe(true);
}
)


test('Starting Deck - toString()', () => {
    const _deck1 = new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C')]);
    expect(_deck1.toString()).toStrictEqual("Ace of Diamond - King of Club - Queen of Club");
})


test('Pioche : get the right card, have the right deck afterwards', () => {
    const deck = new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C')]);

    expect(deck.pioche()).toStrictEqual(new Card('A', 'D'));
    expect(deck).toStrictEqual(new Deck([new Card('K', 'C'), new Card('Q', 'C')]));
})

test('Battle - card1 should win', () => {
    const card1 = new Card("A", "C");
    const card2 = new Card("10", "D");

    expect(battle(card1, card2)).toStrictEqual(
        {
            winningCard: 1,
            draw: false
        }
    );
})
test('Battle - card2 should win', () => {
    const card1 = new Card("7", "H");
    const card2 = new Card("8", "S");

    expect(battle(card1, card2)).toStrictEqual(
        {
            winningCard: 2,
            draw: false
        }
    );
})

test('Battle - should be a draw', () => {
    const card1 = new Card("8", "H");
    const card2 = new Card("8", "S");

    expect(battle(card1, card2)).toStrictEqual(
        {
            winningCard: 0,
            draw: true
        }
    );
})