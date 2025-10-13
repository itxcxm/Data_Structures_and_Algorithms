let nums = [3,1,2]

var findMin = function(nums) {
    let l = 0
    let r = nums.length - 1
    while(l<r){
        let m = Math.floor(r - (r-l)/2)
        if (nums[r]<nums[m]){
            l = m+1
        }else{
            r=m
        }
    }
    return nums[r]
    // nums = nums.sort((a,b)=>a-b)
    // return nums[0]
};

console.log(findMin(nums))