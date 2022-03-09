/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.match(/^\s*[+-]?\d+/);
  if(s==null) {
      return 0
  }
  s=s[0]
  var lessThanZero = false
  s = parseInt(s)
  if(s<0) {
    lessThanZero = true
  }
  const maxNum = Math.pow(2,31)
  if(Math.abs(s)>= maxNum) {
    s = maxNum
    if(!lessThanZero) {
      s-=1
    } else {
      s = -maxNum
    }
  }
  return s
};

var s="2147483648"
console.log(myAtoi(s))