/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false;
  for (let i = 0; i < nums.length - 1; i++) {
    const element = nums[i];
    for (let j = i + 1; j <= Math.min(i + k, nums.length); j++) {
      if (element === nums[j]) return true;
    }
  }
  return false;
};

var nums = [1, 2, 3, 1, 2, 3],
  k = 2;
console.log(containsNearbyDuplicate(nums, k));
