class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        mini = prices[0]
        maxi = 0
        for x in prices:
            profit = x-mini
            maxi = max(profit, maxi)
            if x < mini :
                mini = x
        return maxi