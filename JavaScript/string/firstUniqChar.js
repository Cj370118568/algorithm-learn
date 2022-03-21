/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length == 0) {
        return -1
    }
    if (s.length < 2) {
        return 0
    }
    for (let i = 0; i < s.length; i++) {
        let isRepeat = false
        for (let j = 0; j < s.length; j++) {
            if (s[i]==s[j] && i!=j) {
                isRepeat = true
                break
            }

        }
        if(!isRepeat) {
            return i
        }
    }
    return -1
};

s = "aabb"
console.log(firstUniqChar(s))