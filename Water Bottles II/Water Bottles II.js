let numBottles = 20, numExchange = 1

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
  // dùng while
  let tong = numBottles

  while (numBottles >= numExchange) {
    numBottles -= numExchange - 1
    numExchange++
    tong++
  }

  return tong

  //dùng đệ quy
  // function tinh(x,z){
  //   if(x>=z){
  //     return 1 + tinh((x+y-z)+1,z+1)
  //   }else{
  //     return 0
  //   }
  // }
  // return numBottles + tinh(numBottles,0,numExchange)
};

console.log(maxBottlesDrunk(numBottles,numExchange))