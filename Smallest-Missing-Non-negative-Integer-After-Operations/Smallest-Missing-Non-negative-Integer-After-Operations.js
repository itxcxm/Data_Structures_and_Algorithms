let nums = [1,-10,7,13,6,8]
let value = 5

function findSmallestInteger(test, value) {
    const mp = new Array(value).fill(0);
    for (let x of nums) {
        const v = ((x % value) + value) % value;
        mp[v]++;
    }
    let mex = 0;
    while (mp[mex % value] > 0) {
        mp[mex % value]--;
        mex++;
    }
    return mex;
}

console.log(findSmallestInteger(nums,value))