prices = [7,1,5,3,6,4]

def maxProfit(prices):
    maxs = 0
    mins = prices[0]
    for i in prices:
        maxs = max(maxs, i - mins)
        mins = min(mins, i)
    return maxs
print(maxProfit(prices))