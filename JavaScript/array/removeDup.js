/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let cur = 0;
  while (nums.length > 0) {
    if (cur >= nums.length) return nums.length;

    if (nums[cur] === val) nums.splice(cur, 1);
    else cur++;
  }
  return nums.length;
};

var nums = [3, 2, 2, 3],
  val = 3;
console.log(removeElement(nums, val), nums);
