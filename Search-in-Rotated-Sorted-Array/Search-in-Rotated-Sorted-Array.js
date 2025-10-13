let nums = [4,5,6,7,0,1,2], target = 0

var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] === target) {
            return m;
        } else if (nums[m] >= nums[l]) {
            if (nums[l] <= target && target <= nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (nums[m] <= target && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    return -1;  
};

console.log(search(nums,target))