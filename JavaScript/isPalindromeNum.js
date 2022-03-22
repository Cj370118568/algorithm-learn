/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x<0) return false
  if (x<10) return true

  const s = '' + x + ''
  var slow=0,fast=0
  for (; fast < s.length; fast+=2) {
      slow+=1
  }
  fast = Math.min(s.length-1,fast)
  var i=0
  while(fast>=slow) {
      if(s[i]!=s[fast]) {
          return false
      }
      i++
      fast--
  }
};

var x=-121
console.log(isPalindrome(x))