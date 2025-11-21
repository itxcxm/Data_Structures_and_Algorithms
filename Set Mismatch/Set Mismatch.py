nums = [1,2,2,4]

def findErrorNums(nums):
    my_arr = [0] * (len(nums) + 1)
    check = 0
    err = 0

    for num in nums:
        my_arr[num] += 1

    for j in range(1, len(my_arr)):
        if my_arr[j] == 2:
            check = j
        if my_arr[j] == 0:
            err = j

    return [check, err]

print(findErrorNums(nums))
