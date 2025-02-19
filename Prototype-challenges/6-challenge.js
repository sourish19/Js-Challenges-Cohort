function BankAccount(balance) {
  this.balance = balance;
  this.transactions = [];
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (this.balance > amount) {
    this.balance -= amount;
    this.transactions.push(`Withdrew ${amount}`);
  } else {
    this.transactions.push(`Insufficient balance`);
  }
};

BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions;
};

const balance = 500;
const transaction = {
  type: "deposit",
  amount: 600,
};

const account = new BankAccount(balance);
const result = account.withdraw(transaction.amount);
console.log(account.getTransactionHistory());
