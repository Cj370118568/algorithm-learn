/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const length = nums.length
  if(length < 2) return nums[0]

  var dp = []
  for(var i = 0; i < length; i++) {
    dp[i] = new Array();
    for(var j = 0; j < 2; j++) {
      dp[i][j] = null;
    }
}

  dp[0][0] = nums[0] 
  dp[0][1] = nums[0] 
  for (let i = 1; i < length; i++) {

      dp[i][0] = Math.max(dp[i-1][1],dp[i-1][0])
      dp[i][1] = Math.max(nums[i],dp[i-1][1] + nums[i] ) 
    
  }
  return Math.max(dp[length-1][0],dp[length-1][1] ) 
};

var nums = [-2,-1]
console.log(maxSubArray(nums))