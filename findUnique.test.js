const findUnique = require('./findUnique');

const array1 = [1, 2, 2];
const array2 = ["kismacska", 2, 2];
const array3 = [];
const array4 = [1, 3, 1];
const array5 = [2, 2, 5];

test('first element should be unique', () => {
  expect(findUnique(array1)).toBe(1);
});

test('return value should be "kismacska"', () => {
  expect(findUnique(array2)).toBe("kismacska");
});

test('array is empty, it should throw', () => {
  expect(() => findUnique(array3)).toThrow("Invalid input");
});

test('second element should be unique', () => {
  expect(findUnique(array4)).toBe(3);
});

test('find unique in third position', () => {
  expect(findUnique(array5)).toBe(5);
})