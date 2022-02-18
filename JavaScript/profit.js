

/**
 * @param {number[]} prices
 * @return {number}
 */
//[2,1,2,0,1]
var maxProfit = function (prices) {
    if (prices == null || prices.length < 2) {
        return 0;
    }
    var sell = [],
        buy = [],
        profit = 0,   //总收益
        cost = -1;  //买股票的花费.-1表示空仓
    for (let i = 0; i < prices.length; i++) {
        if (i==prices.length-1 && cost>0) { //最后一天还持仓
            profit += prices[i];
            break;
        }

        if (cost == -1) { //空仓
            if (prices[i] < prices[i + 1]) { //第二天会涨，买入
                cost = prices[i];
                buy[i] = 1;
                sell[i] = 0;
            } else {
                //第二天不涨
                buy[i] = 0;
                sell[i] = 0;
            }
        } else { //持仓
            if (prices[i] <= prices[i + 1]) { //第二天不跌，不卖
                buy[i] = 0;
                sell[i] = 0;
            } else {
                //第二天跌,卖出
                buy[i] = 0;
                sell[i] = 1;
                cost = -1;
            }
        }
        profit += prices[i] * (sell[i] - buy[i]);
    }
    return profit;
};


var prices = [2,1,2,0,1]
// var prices = [7, 1, 2];
var profit = maxProfit(prices);

console.log(profit)


//递归也不会写
var maxProfit = function (prices) {

    if (prices == null || prices.length < 2) {
        return 0;
    }

    return process(prices, prices.length - 1, 0)
};


//第i天的最大收益
var process = function (prices, i, cost) {
    if (i > 1) {
        if (prices[i] < prices[i - 1]) { //股票跌了
            return process(prices, i - 1, cost);
        } else { //股票升了
            return process(prices, i - 1, cost) + prices[i] - cost
        }
    }
    return prices[1] > prices[0] ? prices[1] - prices[0] : 0


}

//常规方式写不下去了
var testmaxProfit = function (prices) {
    var sell, buy, profit = 0;
    //profit[i]=sell[i]+buy[i-i]
    if (prices == null || prices.length < 2) {
        return 0;
    }
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] <= prices[i + 1]) {
            buy[i] = 1;
            sell[i] = 0;
            sell[i + 1]
        } else {
            sell[i] = 1;
            buy[i] = 0;
        }
        profit += sell[i] * prices[i] - buy[i]

    }
    return profit;
};