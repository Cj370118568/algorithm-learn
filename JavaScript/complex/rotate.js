/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  var tmpArr = [];
  for (let i = nums.length - k; i < nums.length; i++) {
    const element = nums[i];
    tmpArr.push(element);
  }
  for (let j = 0; j < nums.length - k; j++) {
    const element = nums[j];
    tmpArr.push(element);
  }
  Object.assign(nums, tmpArr);
};


var swap = function (nums, i, j) {
  nums[i] = nums[i] ^ nums[j];
  nums[j] = nums[i] ^ nums[j];
  nums[i] = nums[i] ^ nums[j];
  return nums
}

var nums = [1, 2, 3], k = 4;
rotate(nums, k);
console.log(nums)