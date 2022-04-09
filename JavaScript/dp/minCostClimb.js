/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length < 2) return cost[0];
  var dp = [];
  const length = cost.length;
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < length; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }

  return Math.min(dp[length - 1], dp[length - 2]);
};

var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
