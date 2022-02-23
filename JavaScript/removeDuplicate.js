/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var swap = function (nums, i, j) {
        nums[i] = nums[i] ^ nums[j];
        nums[j] = nums[i] ^ nums[j];
        nums[i] = nums[i] ^ nums[j];
        return nums
    }
    if (nums.length<2) {
        return false;
    }

    for (let i = 0; i < nums.length; i++) {
        var current = i
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]==nums[j]) {
                return true
            } else if (nums[j]<nums[current]) {
                current=j
            } 
            if(current != i) {
                swap(nums,i,current)
            }
        }
        
    }
    return false
};



var nums = [1,2,3,1]
console.log(containsDuplicate(nums));
console.log(nums)