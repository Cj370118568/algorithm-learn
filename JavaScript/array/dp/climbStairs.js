/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var dp = [0,1,2]
  
  var process = function(n) {
    if(dp.length >= n && dp[n]) return dp[n]
    if(n<=2) return n
     
    return dp[n] = (dp[n-1] ?? process(n-1)) + (dp[n-2] ?? process(n-2))
  }
  return process(n)
  
};

var n = 4
console.log(climbStairs(n))

/**5
 * 1+1+1+1+1x
 * 1+1+1+2
 * 1+1+2+1
 * 1+2+2
 * 1+2+1+1
 * 
 */

/**4
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+2
 * 2+1+1
 */

/**3
 * 1+1+1
 * 1+2
 * 2+1
 */

/**2
 * 1+1
 * 2
 */


/**1
 * 1
 */