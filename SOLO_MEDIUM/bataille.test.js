let line = 0;

const readline = () => {
    line++;

    switch (line) {
        case 1: return "26"; break;
        case 2: return "4C"; break;
        case 3: return "4S"; break;
        case 4: return "QS"; break;
        case 5: return "7D"; break;
        case 6: return "QD"; break;
        case 7: return "AS"; break;
        case 8: return "6H"; break;
        case 9: return "5D"; break;
        case 10: return "2S"; break;
        case 11: return "10S"; break;
        case 12: return "3S"; break;
        case 13: return "2C"; break;
        case 14: return "JS"; break;
        case 15: return "10C"; break;
        case 16: return "2D"; break;
        case 17: return "5H"; break;
        case 18: return "KC"; break;
        case 19: return "AD"; break;
        case 20: return "KD"; break;
        case 21: return "JD"; break;
        case 22: return "JH"; break;
        case 23: return "9H"; break;
        case 24: return "7S"; break;
        case 25: return "6S"; break;
        case 26: return "3D"; break;
        case 27: return "8S"; break;
        case 28: return "26"; break;
        case 29: return "3H"; break;
        case 30: return "7C"; break;
        case 31: return "KS"; break;
        case 32: return "9D"; break;
        case 33: return "4D"; break;
        case 34: return "6D"; break;
        case 35: return "8D"; break;
        case 36: return "JC"; break;
        case 37: return "9S"; break;
        case 38: return "10H"; break;
        case 39: return "5C"; break;
        case 40: return "8H"; break;
        case 41: return "AC"; break;
        case 42: return "2H"; break;
        case 43: return "6C"; break;
        case 44: return "7H"; break;
        case 45: return "10D"; break;
        case 46: return "3C"; break;
        case 47: return "KH"; break;
        case 48: return "AH"; break;
        case 49: return "9C"; break;
        case 50: return "QC"; break;
        case 51: return "4H"; break;
        case 52: return "8C"; break;
        case 53: return "QH"; break;
        case 54: return "5S"; break;

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
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    J: "Jest",
    Q: "Queen",
    K: "King",
    A: "Ace",
};

const cardColors = {
    C: "♣️",
    S: "♠️",
    D: "♦️",
    H: "♥️"
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
        return `${this.faceValue}${this.color}`;
    }
}

class Deck {
    deck = [];
    defausse = [];
    cardInGame = null;

    constructor(deck) {
        this.deck = deck;
    }

    pioche() {
        this.cardInGame = this.deck.shift();
        this.defausse.push(this.cardInGame)
        return this.cardInGame;
    }

    discard(number) {
        for (let i = 0; i < number; i++) {
            this.defausse.push(this.deck.shift());
        }
    }

    flush() {
        this.defausse = [];
    }

    discardThree() {
        this.discard(3);
    }
    toString() {
        let deckDescription = [];
        for (let i = 0; i < this.deck.length; i++) {
            deckDescription.push(this.deck[i]);
        }
        return deckDescription.join(" - ");
    }
    addNewCard(card) {
        this.deck.push(card);
    }

    addNewCards(cards) {
        for (let i = 0; i < cards.length; i++) {
            this.addNewCard(cards[i]);
        }
    }

    isEmpty() {
        return this.deck.length > 0 ? false : true;
    }
}

const battle = (card1, card2) => {
    console.error(`Battle between Card1 : ${card1} - Card2 : ${card2}`);

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
const inputPlayer1 = [];
for (let i = 0; i < n; i++) {
    const card = readline().split(''); // the n cards of player 1
    if (card.length === 3) {
        startingDeck1.push(new Card(card[0] + card[1], card[2]));
    }
    else {
        startingDeck1.push(new Card(card[0], card[1]));
    }
    inputPlayer1.push(card.join(''));
}
console.error(inputPlayer1.join("-"));

const m = parseInt(readline()); // the number of cards for player 2

const inputPlayer2 = [];
for (let i = 0; i < m; i++) {
    const card = readline().split(''); // the m cards of player 2
    if (card.length === 3) {
        startingDeck2.push(new Card(card[0] + card[1], card[2]));
    }
    else {
        startingDeck2.push(new Card(card[0], card[1]));
    }
    inputPlayer2.push(card.join(''));
}
console.error(inputPlayer2.join("-"));

const deck1 = new Deck(startingDeck1.copyWithin());
const deck2 = new Deck(startingDeck2.copyWithin());

//GAME LOOP STARTS HERE

let gameOn = true;
let turns = 1;
while (gameOn) {

    // console.error(deck1.toString());
    // console.error(deck2.toString());

    card1 = deck1.pioche();
    card2 = deck2.pioche();

    const battleResult = battle(card1, card2);
    if (battleResult.winningCard === 1) {
        deck1.addNewCards(deck1.defausse);
        deck1.flush();
        deck1.addNewCards(deck2.defausse);
        deck2.flush();
    }

    if (battleResult.winningCard === 2) {
        deck2.addNewCards(deck1.defausse);
        deck1.flush()
        deck2.addNewCards(deck2.defausse);
        deck2.flush();
    }

    if (deck1.isEmpty() || deck2.isEmpty()) {
        gameOn = false;
        console.log(`${deck1.isEmpty() ? 2 : 1} ${turns}`)
    }

    if (battleResult.draw) {
        if (deck1.deck.length < 4 || deck2.deck.length < 4) {
            gameOn = false;
            console.log(`PAT`)

        }
        deck1.discardThree();
        deck2.discardThree();
        turns--;
    }

    turns++;
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
    expect(_deck1.toString()).toStrictEqual("Ace♦️ - King♣️ - Queen♣️");
})

test('Pioche : get the right card, have the right deck afterwards', () => {
    const deck = new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C')]);

    const retrievedCard = new Card('A', 'D');
    expect(deck.pioche()).toStrictEqual(retrievedCard);
    expect(deck.deck).toStrictEqual([new Card('K', 'C'), new Card('Q', 'C')]);
    expect(deck.defausse).toStrictEqual([retrievedCard]);
})

test('AddNewCard : have the right deck afterwards', () => {
    const deck = new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C')]);
    const newCard = new Card("7", "H");
    deck.addNewCard(newCard);
    expect(deck).toStrictEqual(new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C'), new Card('7', 'H')]));
})
test('AddNewCards : have the right deck afterwards', () => {
    const deck = new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C')]);
    const newCards = [new Card("7", "H"), new Card("2", "C")];
    deck.addNewCards(newCards);
    expect(deck).toStrictEqual(new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C'), new Card('7', 'H'), new Card("2", "C")]));
})

test('Deck isEmpty() - Should be false, 1 card left', () => {
    const deck = new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C')]);

    for (let i = 0; i < 2; i++) {
        deck.pioche();
    }

    expect(deck.isEmpty()).toBe(false);
})

test('Deck isEmpty() - Should be true', () => {
    const deck = new Deck([new Card('A', 'D'), new Card('K', 'C'), new Card('Q', 'C')]);

    for (let i = 0; i < 3; i++) {
        deck.pioche();
    }

    expect(deck.isEmpty()).toBe(true);
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