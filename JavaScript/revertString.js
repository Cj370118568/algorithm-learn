/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var swap = function(s,i,j) {
        const tmp = s[i]
        s[i] = s[j]
        s[j] = tmp 
    }
    if (s.length < 2) {
        return s
    }
    var left = 0,right = s.length-1
    while (left<right) {
        swap(s,left,right)
        left++
        right--
    }
    return s
};

var s = ["h","e","l","l","o"]

console.log(reverseString(s))