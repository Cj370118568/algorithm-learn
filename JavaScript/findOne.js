/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var tmp = 0
    nums.forEach(element => {
        tmp = tmp^element
    });
    return tmp
};

var nums = [4,1,2,1,2]
console.log(singleNumber(nums))