nums = [3,4,5,1,2]

def findMin(nums):
    l =0
    r = len(nums)-1
    while l<r:
        m = l+(r-l)//2
        if nums[r]<nums[m]:
            l = m +1
        else:
            r =m
    return nums[r]

print(findMin(nums))
    