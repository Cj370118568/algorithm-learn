/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(!nums || nums.length<1) return 0

    var start=0,end=nums.length
    while(start<end) {
        const middle = start + Math.floor((end-start)/2)
        if(target===nums[middle]) return middle
        if(target>nums[middle]) {
            var next = middle+1
            if(next>=nums.length) return nums.length
            if(nums[next]>target)  return next
            else if(nums[next]===target) return next
            start = next
            end = end
            continue

        } else {
            var before = middle-1
            if(before<0) return 0
            if(target>nums[before]) return middle
            else if(target==nums[before]) return before
            start = start
            end = before
            continue
        }
    }
    return nums[0]>=target ? 0 : nums.length
};

var nums = [1,4,6,7,8,9], target = 6
console.log(searchInsert(nums,target))