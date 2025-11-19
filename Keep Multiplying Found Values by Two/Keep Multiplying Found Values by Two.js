let nums = [1,16,13,19,12,10] , original = 2


var findFinalValue = function(nums, original) {

    
    while(nums.includes(original)){
        original=original*2
    }
    return original

//     let mySet = new Set()

//     for(let i = 0;i<nums.length;i++){

//         if(nums[i]%original == 0 && nums[i]>original){
//             mySet.add(nums[i])
//         }

//         while(nums[i]==original || mySet.has(original) ){
//             original = original*2
//         }

//     }
//     return original
};

console.log(findFinalValue(nums,original))