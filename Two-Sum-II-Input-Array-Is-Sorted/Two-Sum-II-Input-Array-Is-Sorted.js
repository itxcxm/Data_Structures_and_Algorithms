let numbers = [2,3,4], target = 6

var twoSum = function(numbers, target) {
    
    let i = 0, j=numbers.length-1
    let myMap = new Map();
    // dùng two point
    while(i<j){
        if(numbers[i]+numbers[j]===target){
            return [i+1,j+1]
        }
        if(numbers[i]+numbers[j]>target){
            j--
            i=0
        }
        if(numbers[i]+numbers[j]<target){
            i++
        }
    }

    // dùng map()
    // for(let i = 0;i<=numbers.length-1;i++){
    //     if(myMap.has(numbers[i])){
    //         return [Number(myMap.get(numbers[i]))+1,i+1]
    //     }else{
    //         let a = target - numbers[i]
    //         myMap.set(a,i)
    //     }
    // }

};

console.log(twoSum(numbers,target))