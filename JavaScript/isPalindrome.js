/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s==null) {
        return true
    }
    const tmplength = s.length
    s=s.toLowerCase()
    s = s.match(/[a-zA-Z0-9]/g);
    if(s==null && tmplength>0) {
        return true
    }
    if(s==null||s.length<2) {
        // if (s.length != tmplength) {
        //     return false
        // }
        return true
    }
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

    return true
};

var s = "a."

console.log(isPalindrome(s))
