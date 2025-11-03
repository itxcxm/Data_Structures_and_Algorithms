let colors = "aaabbbabbbb", neededTime = [3,5,10,7,5,3,5,5,4,8,1]

var minCost = function(colors, neededTime) {    
    let l = 0
    let r = l+1
    let sums = 0

    while(r<=colors.length){
        if(colors[l]==colors[r]){
            let maxs = neededTime[l]
            while(colors[l]==colors[r]){
                maxs = Math.max(maxs,neededTime[r])
                r++
            }
            let newArr = neededTime.slice(l,r)
            sums = sums + newArr.reduce((acc, val) => acc + val, 0) - maxs
            l = r 
            r = l+1
        }else{
            l++
            r = l+1
        }
    }
    return sums
};

console.log(minCost(colors,neededTime))