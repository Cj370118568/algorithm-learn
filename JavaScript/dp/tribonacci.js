/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  var dp = []
  dp[0] = 0
  dp[1] = 1
  dp[2] = 1
  if(n<=1) return n
  if(n==2) return 1

  var process = function(n) {
    dp[n] = (dp[n-1] ?? process(n-1)) + (dp[n-2] ?? process(n-2)) + (dp[n-3] ?? process(n-3))
    return dp[n]
  }

  return process(n)
};

var n = 5
console.log(tribonacci(n))