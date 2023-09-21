//Sliding window
var bestTimeToBuyAndSell = function(prices){
    //set the minimum to the first price
    let min = prices[0]
    //max is 0 for baseline
    let max = 0
    //iterate through prices
    for(let i=1;i<prices.length;i++){
        //create profit from the lowest price and the current price
        let profit = prices[i] - min
        //compare max and profit and determine which one is higher and set it to that number
        max = Math.max(max, profit)
        //if min is greater than prices, set it to the new price
        if(min>prices[i]) min = prices[i]
    }
    //return the max profit
    return max
}