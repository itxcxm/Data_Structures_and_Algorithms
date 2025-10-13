nums = [-1,0,3,5,9,12]
target = 9

def search(nums,target):
    l = 0
    r = len(nums)-1
    while l<=r:
        m = l+(r-l)//2
        if nums[m]==target:
            return m
        if nums[m]<target:
            l = m +1
        else:
            r = m -1
    return -1

print(search(nums,target))
