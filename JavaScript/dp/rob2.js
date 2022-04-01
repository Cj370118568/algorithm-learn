/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var dp = [],
    dp1 = [];
  const length = nums.length;
  if (length <= 1) return nums[0];
  if (nums.length <= 3) return Math.max(nums[0], nums[1]);

  dp[0] = 0;
  dp[1] = nums[1];
  dp1[0] = nums[0];
  dp1[1] = nums[0];

  for (let i = 2; i < length; i++) {
    let element = nums[i];
    let before = nums[i - 1];
    if (i === length - 1) element = 0;
    if (i === 1) before = 0;
    dp[i] = Math.max(dp[i - 1] + before, dp[i - 2] + element);
    dp1[i] = Math.max(dp[i - 1] + before, dp[i - 2] + element);
  }

  return Math.max(dp[length - 1], dp1[length - 1]);
};

var nums = [1, 2, 3, 1];
console.log(rob(nums));
