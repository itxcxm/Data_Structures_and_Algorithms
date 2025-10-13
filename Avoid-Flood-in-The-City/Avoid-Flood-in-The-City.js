let rains = [1,2,0,0,2,1]


var avoidFlood = function(rains){
    let mySet = new Set() // số ngày mưa 
    let noRains = 0; // số ngày rút hồ
    for(let i = 0;i<rains.length;i++){
        if(rains[i]===0){
            noRains ++
        }else{
            if(noRains>0){
                
            }
        }
    }
    return arrRains

}

console.log(avoidFlood(rains))