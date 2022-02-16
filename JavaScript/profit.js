

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var sell,buy,profit=0;
    //profit[i]=sell[i]+buy[i-i]
    if(prices==null||prices.length<2) {
        return 0;
    }
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i]<=prices[i+1]) {
            buy[i]=1;
            sell[i]=0;
            sell[i+1]
        } else {
            sell[i]=1;
            buy[i]=0;
        }
        profit+=sell[i]*prices[i]-buy[i]
        
    }
    return profit;
};

var prices = [7,1,5,3,6,4];
var profit = maxProfit(prices);

console.log(profit)