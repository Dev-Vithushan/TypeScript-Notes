// Step 1: BankAccount class
class BankAccount {
    accountNumber: number;
    owner: string;
    balance: number;
  
    constructor(accountNumber: number, owner: string, balance: number = 0) {
      this.accountNumber = accountNumber;
      this.owner = owner;
      this.balance = balance;
    }
  
    // Deposit method
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${amount} deposited. New balance: ${this.balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    // Withdraw method
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} withdrawn. New balance: ${this.balance}`);
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    }
  
    // Check balance method
    checkBalance(): number {
      return this.balance;
    }
  }
  
  // Step 2: SavingsAccount class inheriting BankAccount
  class SavingsAccount extends BankAccount {
    interestRate: number;
  
    constructor(accountNumber: number, owner: string, balance: number, interestRate: number) {
      super(accountNumber, owner, balance);
      this.interestRate = interestRate;
    }
  
    // Apply interest method
    applyInterest(): void {
      const interest = this.balance * (this.interestRate / 100);
      this.balance += interest;
      console.log(`Interest applied. New balance: ${this.balance}`);
    }
  }
  
  // Step 3: Testing the classes
  const account1 = new BankAccount(12345, "John Doe", 1000);
  account1.deposit(500); // Output: 500 deposited. New balance: 1500
  account1.withdraw(200); // Output: 200 withdrawn. New balance: 1300
  console.log(`Balance: ${account1.checkBalance()}`); // Output: Balance: 1300
  
  const savingsAccount = new SavingsAccount(67890, "Jane Doe", 2000, 5);
  savingsAccount.deposit(1000); // Output: 1000 deposited. New balance: 3000
  savingsAccount.applyInterest(); // Output: Interest applied. New balance: 3150
  console.log(`Savings Balance: ${savingsAccount.checkBalance()}`); // Output: Savings Balance: 3150
  

