let nums = [1, 2, 2, 4];

var findErrorNums = function(nums) {
    let myArr = Array(nums.length + 1).fill(0);
    let check = 0;
    let err = 0;

    for (let i = 0; i < nums.length; i++) {
        myArr[nums[i]] += 1;
    }

    for (let j = 1; j < myArr.length; j++) {
        if (myArr[j] === 2) {
            check = j;
        }
        if (myArr[j] === 0) {
            err = j;
        }
    }

    return [check, err];
};

console.log(findErrorNums(nums)); // Output: [2, 3]