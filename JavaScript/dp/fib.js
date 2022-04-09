/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  var dp = []
  dp[0] = 0
  dp[1] = 1
  if(n==0) return 0
  if(n==1) return 1

  var process = function(n) {
    return dp[n] = (dp[n-1] ?? fib(n-1)) + (dp[n-2] ?? fib(n-2))
  }
  
  return process(n)
};

var n = 2
console.log(fib(n))