/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length < 2) return cost[0];
  var dp = [];
  const length = cost.length;
  dp[0] = cost[0];
  dp[1] = Math.min(cost[1], dp[0]);
  for (let i = 2; i < length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
  }

  return Math.min(dp[length - 1], dp[length - 2]);
};

var cost = [1, 100, 2, 3, 4, 100, 5, 6, 100, 7];
console.log(minCostClimbingStairs(cost));
