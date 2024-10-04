const declareWinner = require('./declareWinner');

const array1 = [
  {
    name: "Józsui",
    health: 95,
    damagePerAttack: 120
  },
  {
    name: "Feri",
    health: 70,
    damagePerAttack: 40
  },
  "Józsui"
];

const array2 = [
  {
    name: "Józsui",
    health: 95,
    damagePerAttack: 1
  },
  {
    name: "Feri",
    health: 70,
    damagePerAttack: 4000
  },
  "Feri"
];

const array3 = [
  {
    name: "Józsui",
    health: 100,
    damagePerAttack: 40
  },
  {
    name: "Feri",
    health: 100,
    damagePerAttack: 60
  },
  "Józsui"
];

test('Józsui should win the fight', () => {
  expect(declareWinner(...array1)).toBe("Józsui");
});

test('Feri should win the fight', () => {
  expect(declareWinner(...array2)).toBe("Feri");
});

test('Feri should win the fight but in the secound round', () => {
  expect(declareWinner(...array3)).toBe("Feri");
});

