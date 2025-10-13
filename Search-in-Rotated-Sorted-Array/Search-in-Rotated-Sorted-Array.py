nums = [4, 5, 6, 7, 0, 1, 2]
target = 0

def search(nums, target):
    l = 0
    r = len(nums) - 1

    while l <= r:
        m = l + (r - l) // 2

        if nums[m] == target:
            return m
        elif nums[m] >= nums[l]:
            if nums[l] <= target <= nums[m]:
                r = m - 1
            else:
                l = m + 1
        else:
            if nums[m] <= target <= nums[r]:
                l = m + 1
            else:
                r = m - 1

    return -1

print(search(nums, target))