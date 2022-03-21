/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  for (let i = 1; i < nums.length; i++) {
    if(nums[i] != 0) {
      let j=i,tmp = nums[i]
      for(;j>0;j--) {
        if (nums[j-1]!=0) {
          break
        }
        nums[j] = nums[j-1]
      }
      nums[j]=tmp
    }
  }
  return nums
};

var nums = [73348,66106,-85359,53996,18849,-6590,-53381,-86613,-41065,83457,0]
console.log(moveZeroes(nums))