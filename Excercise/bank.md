# Problem: Create a Simple Banking System
You need to create a simple banking system that allows users to open a bank account, deposit money, withdraw money, and check their balance. Additionally, the system should also support savings accounts, which provide interest on the balance.

### Instructions:
Create a BankAccount class with the following properties and methods:

### Properties:
`accountNumber (number):` The account number.

`owner (string):` The name of the account holder.

`balance (number):` The balance of the account.

### Methods:
`deposit(amount: number): void:` Adds the given amount to the account balance.

`withdraw(amount: number): void:` Subtracts the given amount from the account balance if sufficient funds are available.

`checkBalance(): number:` Returns the current account balance.

#### Create a SavingsAccount class that inherits from BankAccount. The SavingsAccount class should:

### Properties:
`interestRate (number):` The interest rate for the savings account.

### Methods:
`applyInterest(): void:` Adds interest to the balance based on the interest rate.


### Write a simple test to create bank accounts, perform deposits, withdrawals, and check the balance.

