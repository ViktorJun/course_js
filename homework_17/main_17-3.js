class BankAccount {
    constructor(summ) {
        this.summ = summ;
    }
    getBalance() {
        return this.summ;
    }
    deposit(depSumm) {
        this.summ += depSumm;
    }
    withdraw(withSumm) {
        this.summ -= withSumm;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());