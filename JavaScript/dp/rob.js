/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) return nums[0];

  const length = nums.length;
  var dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return Math.max(dp[length - 1], dp[length - 2]);
};

var nums = [2, 1, 1, 2];
console.log(rob(nums));
