const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str_n = n.toString();
  let max_number = 0;

  for (let i = 0; i < str_n.length; i++) {
    const new_number = parseInt(str_n.substring(0, i) + str_n.substring(i + 1));
    if (new_number > max_number) {
      max_number = new_number;
    }
  }

  return max_number;
}

module.exports = {
  deleteDigit
};
