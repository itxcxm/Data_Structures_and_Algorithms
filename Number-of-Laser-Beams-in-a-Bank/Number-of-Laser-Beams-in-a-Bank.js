let bank = ["011001","000000","010100","001000"]

var numberOfBeams = function(bank) {
    let l = 0
    let sums = 0

    for(let i = 0 ; i<bank.length;i++){
        if(bank[i].includes("1")){
            let r = bank[i].split("1").length - 1
            sums = sums + l*r
            l=r
        }
    }

    return sums
};

console.log(numberOfBeams(bank))