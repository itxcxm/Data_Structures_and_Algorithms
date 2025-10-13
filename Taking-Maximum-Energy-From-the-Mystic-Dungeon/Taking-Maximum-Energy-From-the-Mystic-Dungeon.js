let energy = [5,2,-10,-5,1], k = 3

var maximumEnergy = function(energy, k) {
    let maxs = energy[energy.length-1]
    for(let j = energy.length-1; j>energy.length-1-k;j--){
        maxs = Math.max(energy[j],maxs)
    }

    for( let i = energy.length-1-k ; i>=0;i--){
        energy[i]=energy[i]+energy[i+k]
        maxs = Math.max(energy[i],maxs)
    }
    return maxs

    /*
    Method 1
    for( let i = energy.length-1-k ; i>=0;i--){
        energy[i]=energy[i]+energy[i+k]
    }
    return Math.max(...energy)
    */

};

console.log(maximumEnergy(energy,k))