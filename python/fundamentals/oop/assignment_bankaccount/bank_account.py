class BankAccount:

    bank_accounts = []

    def __init__(self, interest_rate, balance=0):
        self.balance = balance
        self.interest_rate_decimal = interest_rate / 100
        BankAccount.bank_accounts.append(self)
    
    def deposit(self, amount): # increases the account balance by the given amount
        self.balance += amount
        return self
    
    def withdraw(self, amount): # decreases the account balance by the given amount if
        # there are sufficient funds; if there is not enough money, print a message 
        # "Insufficient funds: Charging a $5 fee" and deduct $5
        if self.balance >= amount:
            pass
        else:
            print(f"Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self
        
    def display_account_info(self): # print to the console: eg. "Balance: $100"
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self): # increases the account balance by the
        # current balance * the interest rate (as long as the balance is positive)
        if(self.balance > 0):
            self.balance = self.balance * self.interest_rate_decimal
        return self

    @classmethod
    def display_bank_accounts(cls):
        for bank_account in cls.bank_accounts:
            bank_account.display_account_info()


account1 = BankAccount(10)
account2 = BankAccount(20, 1000)
account1.deposit(10).deposit(20).deposit(30).withdraw(10).yield_interest().display_account_info()
account2.deposit(500).deposit(200).withdraw(1000).withdraw(500).withdraw(10).withdraw(100000).yield_interest().display_account_info()
print("==============")
BankAccount.display_bank_accounts()
