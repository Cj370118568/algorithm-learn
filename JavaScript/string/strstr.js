/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle==null||needle=="") {
    return 0
  }
  if(needle.length > haystack.length) {
    return -1
  }
  for (let i = 0; i < haystack.length; i++) {
    if(haystack.length-i<needle.length) {
      return -1
    }
    if (haystack[i]==needle[0]) {
      var ismatch = true
      for (let j = 0; j < needle.length; j++) {
        if(needle[j]!=haystack[i+j]) {
          ismatch=false
          break
        }
      }
      if(ismatch) {
        return i
      }

    }
   
  }
  return -1
};

var haystack = "mississippi", needle = "issip"
console.log(strStr(haystack,needle))