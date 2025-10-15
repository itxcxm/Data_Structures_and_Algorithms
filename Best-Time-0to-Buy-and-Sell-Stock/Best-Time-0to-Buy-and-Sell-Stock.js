let prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let maxP = 0;
    let minBuy = prices[0];

    for (let sell of prices) {
        maxP = Math.max(maxP, sell - minBuy);
        minBuy = Math.min(minBuy, sell);
    }
    return maxP;
    
};
console.log(maxProfit(prices))