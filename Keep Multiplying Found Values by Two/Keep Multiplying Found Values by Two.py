nums = [5,3,6,1,12]
original = 3

def findFinalValue(nums,original):
    # while original in nums:
    #     original = original*2
    # return original

    mySet = set(nums)
    while original in mySet:
        original = original*2
    return original

print(findFinalValue(nums,original))