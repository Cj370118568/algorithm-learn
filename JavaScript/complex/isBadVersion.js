/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var isBadVersion = function(version) {
    if(version>=3) {
        return true
    } else {
        return false
    }
};
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var middleCheck = function(start,end) {
            if(end==1) {
                return 1
            }
            const mid = start+Math.floor((end-start)/2)
            const flag = isBadVersion(mid) 
            if(mid==1) {
                if(flag==false) {
                    return isBadVersion(2) ? 2 : 3
                } else {
                    return 1
                }
            }
            if(flag) {
                const flag1 = isBadVersion(mid-1)
                if(!flag1) {
                    return mid
                } else {
                    return middleCheck(start,mid-1)
                }
            } else {
                const flag1 = isBadVersion(mid+1)
                if(flag1) {
                    return mid+1
                } else {
                    return middleCheck(mid+1,end)
                }
            }

        }
        return middleCheck(0,n)
    };
};

var n = 3, bad = 3
console.log(solution(isBadVersion)(3))