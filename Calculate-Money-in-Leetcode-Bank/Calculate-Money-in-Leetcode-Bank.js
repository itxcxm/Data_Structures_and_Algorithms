let n = 14

var totalMoney = function(n,t) {
  let sum = 0;
  let times = 0;
  while (n >= 7) {
    sum += 28 + times * 7;
    n -= 7;
    times++;
  }

  for (let i = 1; i <= n; i++) {
    sum += i + times;
  }
  return sum;
};

console.log(totalMoney(n))