/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sArr = s.split("").sort();
  let tArr = t.split("").sort();

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) return tArr[i];
  }
  return tArr[s.length];
};
var s = "",
  t = "y";
console.log(findTheDifference(s, t));
