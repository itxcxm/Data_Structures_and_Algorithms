class Bank:
    def __init__(self, balance):
        self.balance = balance

    def checkBank(self, account):
        return (
            isinstance(account, int)
            and account >= 1
            and account <= len(self.balance)
        )

    def transfer(self, account1, account2, money):
        if (not self.checkBank(account1)
                or not self.checkBank(account2)
                or self.balance[account1 - 1] < money):
            return False
        else:
            self.balance[account1 - 1] -= money
            self.balance[account2 - 1] += money
            return True

    def deposit(self, account, money):
        if not self.checkBank(account):
            return False
        else:
            self.balance[account - 1] += money
            return True

    def withdraw(self, account, money):
        if (not self.checkBank(account)
                or self.balance[account - 1] < money):
            return False
        else:
            self.balance[account - 1] -= money
            return True

balance = [0]
myBank = Bank(balance)

print(myBank.deposit(1, 1000000000000)) 
print(myBank.transfer(1, 1, 1000000000000))  
print(myBank.withdraw(1, 1000000000000))  
print(myBank.deposit(1, 1))               
print(myBank.transfer(1, 1, 0))           
print(myBank.withdraw(1, 0))              
