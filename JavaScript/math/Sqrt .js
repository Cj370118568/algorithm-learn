/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  var left = 0;
  var right = x;
  var val = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const result = mid * mid;
    if (result === x) return mid;
    if (result > x) right = mid - 1;
    if (result < x) {
      val = mid;
      left = mid + 1;
    }
  }
  return val;
};

var x = 2147395600;
console.log(mySqrt(x));
