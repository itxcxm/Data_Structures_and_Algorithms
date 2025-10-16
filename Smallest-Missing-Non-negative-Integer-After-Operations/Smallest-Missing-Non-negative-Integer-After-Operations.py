nums = [3,0,3,2,4,2,1,1,0,4]
value = 5

def findMaximumMEX(nums, value):
    DP = [0] * value

    for n in nums:
        DP[n % value] += 1

    # tính số vòng lặp tối thiểu
    rounds = min(DP)

    for i in range(value):
        if DP[i] - rounds == 0:
            return (rounds * value) + i

print(findMaximumMEX(nums, value))
