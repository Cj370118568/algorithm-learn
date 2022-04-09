/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const str = n.toString(2);
  let count = 0;
  for (const element of str) {
    if (element === "1") count++;
  }
  return count;
};

var num = 00000000000000000000000000001011;
console.log(hammingWeight(num));
