colors = "aaabbbabbbb"
neededTime = [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]

def minCost(colors, neededTime):
    total_cost = 0
    max_time = neededTime[0]

    for i in range(1, len(colors)):
        if colors[i] == colors[i - 1]:
            total_cost += min(max_time, neededTime[i])
            max_time = max(max_time, neededTime[i])
        else:
            max_time = neededTime[i]

    return total_cost


print(minCost(colors, neededTime)) 