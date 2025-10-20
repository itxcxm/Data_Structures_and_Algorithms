let operations = ["--X","X++","X++"]


var finalValueAfterOperations = function(operations) {
    let tong = 0
    for(let i = 0;i<operations.length;i++){
        if(operations[i].includes("+")){
            tong++
        }else{
            tong--
        }
    }
    return tong
};

console.log(finalValueAfterOperations(operations))