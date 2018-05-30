/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x) => {
  hello = ""
  while (x >= 0) {
    hello += "hello"
    x--
  }
  return hello;
};

module.exports = {
  solution,
};
