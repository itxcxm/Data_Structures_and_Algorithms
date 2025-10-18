nums = [1,2,2,3,3,4]
k = 2

def maxDistinctElements(nums, k):
    nums.sort()
    cnt = 0
    prev = -float('inf')

    for num in nums:
        curr = min(max(num - k, prev + 1), num + k)
        if curr > prev:
            cnt += 1
            prev = curr

    return cnt

print(maxDistinctElements(nums, k))
