/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2) return 0
  var buys = [-prices[0]]
  var sells = [0]
  for (let i = 1; i < prices.length; i++) {
    sells[i] = Math.max(sells[i-1],buys[i-1] + prices[i])
    buys[i] = Math.max(buys[i-1], -prices[i])
  }
  return sells[prices.length-1]
};

var prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))