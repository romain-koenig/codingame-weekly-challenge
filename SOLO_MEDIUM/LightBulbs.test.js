

const s = readline();
const t = readline();
console.error(s);
console.error(t);




canChangeFirstBulb = (lightBulbs) => {


  if (lightBulbs.length === 0) {
    throw ERROR_MESSAGES.EMPTY_ARRAY;
  }
  if (!checkValues(lightBulbs)) {
    throw ERROR_MESSAGES.WRONG_TYPES;
  }

  if (lightBulbs.length === 1) {
    return true;
  }
  if (lightBulbs.length === 2) {
    return lightBulbs[1] === 1 ? true : false;
  }

  let answer = lightBulbs[1] === 1;
  for (let i = 2; i < lightBulbs.length; i++) {
    answer = answer && (lightBulbs[i] === 0);
  }
  return answer;

}


const ERROR_MESSAGES = {
  "DIFFERENT_LENGTH": "Not comparing right length",
  "WRONG_TYPES": "Wrong types beeing used",
  "EMPTY_ARRAY": "Empty Array beeing used",
}

compare = (x, y) => {
  
  checkDataInput(x, y);
  
  let answer = new Array(x.length)
  for (let i = 0; i < x.length; i++) {
    answer[i] = !x[i] ^ y[i];
  }
  answer = answer.map(e => {
    return e === 0 ? false : true
  });

  return answer
}

function checkValues(t) {
  return t.reduce((a, e) => a && (e === 0 || e === 1), true);
}

function checkDataInput(x, y) {
  

  if (x.length !== y.length) {
    throw ERROR_MESSAGES.DIFFERENT_LENGTH;
  }

  if (!checkValues(x) || !checkValues(y)) {
    throw ERROR_MESSAGES.WRONG_TYPES;
  }
}



test('First Test', () => {
  expect(true).toBe(true);
})

test('Compare 2 identical arrays', () => {
  const x = [0, 1, 0];
  const y = [0, 1, 0];
  expect(compare(x, y)).toStrictEqual([true, true, true]);
})

test('Compare 2 identical arrays', () => {
  const x = [0, 1, 0, 1];
  const y = [0, 1, 0, 1];
  expect(compare(x, y)).toStrictEqual([true, true, true, true]);
})

test('Compare 2 different arrays', () => {
  const x = [0, 1, 0, 1];
  const y = [0, 1, 1, 1];
  expect(compare(x, y)).toStrictEqual([true, true, false, true]);
})

test('Compare different length arrays', () => {
  
  expect(() => compare([0, 1, 0, 1], [0, 1, 0])).toThrow(ERROR_MESSAGES.DIFFERENT_LENGTH);
})

test('Compare arrays not containing 0 and 1', () => {
  expect(() => compare([true, false, false, true], [0, 1, 0, 0])).toThrow(ERROR_MESSAGES.WRONG_TYPES);
})






test('Can I change the last lightbulb ? Throws error if incorrect data', () => {
  
  expect(() => canChangeFirstBulb(["bulbs"])).toThrow(ERROR_MESSAGES.WRONG_TYPES);
})

test('Can I change the last lightbulb ? Throws error if empty data', () => {
  const bulbs = [0];
  expect(canChangeFirstBulb(bulbs)).toBe(true);
})


test('Can I change the last lightbulb ? Always YES', () => {
  const bulbs = [0];
  expect(canChangeFirstBulb(bulbs)).toBe(true);
})

test('Two lightbulbs, last is ON, Can change', () => {
  const bulbs = [0, 1];
  expect(canChangeFirstBulb(bulbs)).toBe(true);
})

test('Two lightbulbs, last if OFF, Cannot change', () => {
  const bulbs = [0, 0];
  expect(canChangeFirstBulb(bulbs)).toBe(false);
})


test('ArrayOf bulbs, Cannot change', () => {
  const bulbs = [0, 1, 0, 1, 0];
  expect(canChangeFirstBulb(bulbs)).toBe(false);
})
test('ArrayOf bulbs, Cannot change', () => {
  const bulbs = [0, 0, 0, 0, 0];
  expect(canChangeFirstBulb(bulbs)).toBe(false);
})
test('ArrayOf bulbs, Can change', () => {
  const bulbs = [0, 1, 0, 0, 0];
  expect(canChangeFirstBulb(bulbs)).toBe(true);
})


// Game : https://www.codingame.com/ide/puzzle/light-bulbs


/* You are given a row of N light bulbs, represented by a string of 0 or 1, totally N characters in the string.
0 means the light bulb is OFF.
1 means the light bulb is ON.

The left-most character is light bulb 1.
The right-most character is light bulb N.

Each light bulb has an independent switch allowing you to switch it ON or OFF.

To switch ON/OFF any light bulb, there are two rules:

Rule 1 You can change the state of light bulb i if i+1 is ON AND i+2, i+3,... N are OFF.
Rule 2 Rule 1 does not apply to light bulb N, which can be switched ON/OFF at will.

The game starts with a given lighting pattern.
You will also have a target lighting pattern.

Find the minimum number of switches needed to change the pattern from start to target.


Example
To change pattern from 1101 to 0100

1101 (start)
1100 (switch #4, by Rule 2)
0100 (switch #1, by Rule 1) - reached target by switching 2 times.
*/