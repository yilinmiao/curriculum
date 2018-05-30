/**
 * Takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  if (a == Math.max(a, b, c)) {
    return a;
  }
  if (b == Math.max(a, b, c)) {
    return b;
  }
  return c;
};

module.exports = {
  solution,
};
