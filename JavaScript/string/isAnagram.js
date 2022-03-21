/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var getKeysNums = function(text) {
        var keys = {}
        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            keys[element]=keys[element] == null ? 1 : keys[element]+1
        }
        return keys
    }

    var sKeys = getKeysNums(s)
    var yKeys = getKeysNums(t)

    if(Object.keys(sKeys).length == Object.keys(yKeys).length) {
        for (const key in sKeys) {
            if (yKeys[key] != sKeys[key]) {
                return false
            }
        }
        return true
    } 
    return false
};

var s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))