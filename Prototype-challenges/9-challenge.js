function BankAccount(accountNumber, holderName, balance) {
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance > amount ? (this.balance -= amount) : this.balance;
};

BankAccount.prototype.transfer = function (amount, targetAccount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    targetAccount.deposit(amount);
  }
};

const acc1 = new BankAccount(101, "Alice", 1200);
const acc2 = new BankAccount(102, "Bob", 500);

// acc1.deposit(100)
// acc2.deposit(100)
// acc1.withdraw(500)
// acc2.withdraw(500)
// acc1.transfer(300,acc2)
// acc2.transfer(300,acc1)
console.log(acc1.balance, acc2.balance);
