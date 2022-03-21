/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var lessthanzero=false
  if (x<0) {
    x = -x
    lessthanzero = true
  }
  if (x<10 ) {
    return lessthanzero ? -x:x
  }
 
  var i = 1
  while(x-i>=0) {
    i*=10
  }
  i /= 10
  var revert = 0
  var high = i
  while(i>=1) {
    const num = Math.floor(x/i)
    x = x%i
    revert += num*(high/i)

    i/=10
  }
  if (revert > (Math.pow(2,31) -1)) {
    return 0
  }
  return lessthanzero ? -revert:revert
}


var x = 1534236469
console.log(reverse(x))