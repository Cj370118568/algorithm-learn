/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 2) {
        if(strs.length==1) {
            return strs[0]
        }
        return ''
    }
    var commonPrefix = ''
    for (let i = 0; i < strs.length; i++) {
        if(i==0) {
            commonPrefix=strs[0]
            // for (let j = 0; j < strs[i].length; j++) {
            //     // commonPrefix.push(strs[0][j])
                
            // }
        } else {
            var strLength = strs[i].length
            for (let j = 0; j < strLength; j++) {
                var tmpStr = commonPrefix
                if(tmpStr[j]!=strs[i][j]) {
                    if(j==0) {
                        return ''
                    } else {
                        commonPrefix=tmpStr.substring(0,j)
                    }
                }
            }
            if(commonPrefix.length > strLength) {
                commonPrefix = commonPrefix.substring(0,strLength)
            }
        }
        
    }
    return commonPrefix

};

var strs = ["ab", "a"]
console.log(longestCommonPrefix(strs))