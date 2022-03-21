/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

  var translate = function(s) {
    var maxlength = s.length
    if(maxlength===1) {
      return '11'
    }
    
    var fast=1,slow=0,finalStr='',isRepeat=false
    for(;fast<maxlength;fast++) {
      if(fast==maxlength-1) {
        if(s[fast]==s[slow]) {
          return finalStr+= ''+ fast-slow+1 +'' + s[fast]
        } else {
          if(isRepeat) {
            return finalStr += '' + fast-slow +s[slow] + '1' + s[fast]
          } else {
            return finalStr += '1' + s[slow] + '1' + s[fast]
          }
          
        }
        
      }
      if(s[fast]==s[slow]) {
        isRepeat=true
        continue
      } else {
        if(fast-slow===1) {
          finalStr += '1' + s[slow]
        } else {
          finalStr+= ''+ fast-slow +'' + s[slow]
        }
        isRepeat = false
        slow=fast
        continue
      }
    }
    return finalStr
  }

  if(n<1||n>30) {
    return null
  }
  if (n==1) {
    return '1'
  } else {
    return translate(countAndSay(n-1))
  }
};

var n = 8
console.log(countAndSay(n))