

var Bank = function(balance) {
    this.balance = balance
};

Bank.prototype.checkBank = function(account){
    return account >= 1 && account <= this.balance.length && !isNaN(account-1)
}

Bank.prototype.transfer = function(account1, account2, money) {
    if(!this.checkBank(account1) || !this.checkBank(account2) || this.balance[account1-1]<money ){
        return false
    }else{
        this.balance[account1-1] -= money
        this.balance[account2-1] += money
        return true
    }
};

Bank.prototype.deposit = function(account, money) {
    if(!this.checkBank(account)){
        return false
    }else{
        this.balance[account-1] += money
        return true
    }
};

Bank.prototype.withdraw = function(account, money) {
    if(!this.checkBank(account) || this.balance[account-1]<money){
        return false
    }else{
        this.balance[account-1] -= money
        return true
    }
};

let balance = [0];
let myBank = new Bank(balance)

console.log(myBank.deposit(1,1000000000000))
console.log(myBank.transfer(1,1,1000000000000))
console.log(myBank.withdraw(1,1000000000000))
console.log(myBank.deposit(1,1))
console.log(myBank.transfer(1,1,0))
console.log(myBank.withdraw(1,0))