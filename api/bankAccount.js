class BankAccount {

  constructor(){
    this.balance = 0.00
    this.prevTransactions = []
  }

  withdraw(amount, customDate){
    this.balance -= amount
    const date = this.currentDate(customDate)
    
    const type = 'withdrawal'
    
    this.addTransactionObject(type,amount,date)
  }

  deposit(amount, customDate){
    this.balance += amount
    const date = this.currentDate(customDate)
    const type = 'deposit'
    
    this.addTransactionObject(type,amount,date)
  }

  showBalance() {
    return this.balance.toFixed(2)
  }

  showStatement(){
    return this.prevTransactions
  }

  printStatement(){
    console.log('date || credit || debit || total')
    const reversedArray =this.prevTransactions.slice().reverse()
    for (let i =0 ; i< reversedArray.length; i++) {
      if (reversedArray[i].transaction === 'withdrawal') {
        console.log(`${reversedArray[i].date} || ||${reversedArray[i].amount.toFixed(2)} || ${reversedArray[i].total.toFixed(2)}`)
      } else {
        console.log(`${reversedArray[i].date} || ${reversedArray[i].amount.toFixed(2)} || || ${reversedArray[i].total.toFixed(2)}`)
      }
    }
  }

  private

  addTransactionObject(type,amount,date) {
    let transactionObject = {
      transaction: type,
      amount: amount,
      date: date,
      total: this.balance
    }
    this.prevTransactions.push(transactionObject)
  }

  currentDate(customDate) {
    if (customDate) {
      return new Date(customDate).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
    } 
    return new Date().toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  }
  
}
module.exports = BankAccount