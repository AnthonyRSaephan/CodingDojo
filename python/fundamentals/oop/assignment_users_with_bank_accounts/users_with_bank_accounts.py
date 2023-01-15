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

    def get_balance(self):
        return self.balance

    @classmethod
    def display_bank_accounts(cls):
        for bank_account in cls.bank_accounts:
            bank_account.display_account_info()

class User():
    def __init__(self, name, email):
        self.name = name
        self.__email = email
        self.accounts = {}
    
    def make_deposit(self, amount, accountName):
        account = self.get_account(accountName)
        if not account:
            print(f"Account \"{accountName}\" not found")
            return
        account.deposit(amount)

    def get_email(self):
        return self.__email
    
    def make_withdrawal(self, amount, accountName):
        account = self.get_account(accountName)
        account.withdraw(amount)
    
    def display_user_balance(self, accountName):
        account = self.get_account(accountName)
        account.display_account_info()
    
    def add_account(self, name):
        account = self.get_account(name)
        if account:
            print(f"Account \"{name}\" already exists")
            return
        print(f"Account \"{name}\" created")
        self.accounts[name] = BankAccount(balance=0, interest_rate=10)
    
    def display_accounts(self):
        for name, account in self.accounts.items():
            print(f"\"{name}\": ${account.get_balance()}")
    
    def get_account(self, name):
        return self.accounts.get(name)

    def transfer_money(self, amount, other_user): # Can only transfer from Checking to Checking
        account = self.get_account("Checking")
        other_account = other_user.get_account("Checking")
        if not account:
            print(f"{self.name} does not have a Checking account")
            return
        if not other_account:
            print(f"{other_user.name} does not have a Checking account")
            return
        print(f"Transferring {amount} from {self.name} to {other_user.name}")
        account.balance -= amount
        other_account.balance += amount


user = User("Anthony", "anthonyrsaephan@gmail.com")
user.add_account("Checking")
user.add_account("Checking")
user.add_account("Savings")
user.make_deposit(500, "Checking")
user.make_deposit(1000, "Savings")
user.make_deposit(1000000, "DoesNotExist")
print("----------")
user.display_accounts()
print("----------")
other_user = User("John", "John@codingdojo.com")
user.transfer_money(200, other_user)
other_user.add_account("Checking")
user.transfer_money(200, other_user)
print("----------")
user.display_accounts()
other_user.display_accounts()