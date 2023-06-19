const BankAccount = require('./app.js')

describe( 'integration test', () => {
    test('it should have a starting balance of 0', ()=> {
      const account = new BankAccount()
      expect(account.showBalance()).toEqual('0.00')

    })
    test('it should be able to add and remove certain amounts of money from the balance', ()=> {
      const account = new BankAccount()
      account.deposit(50.00)
      account.withdraw(25.00)
      expect(account.showBalance()).toEqual('25.00')
      
    })
    test('it should record the dates of deposits and withdrawals', ()=> {
      const account = new BankAccount()
      account.deposit(50.00)
      account.withdraw(25.00)
      expect(account.showStatement()[0].date).toEqual('19/06/2023')
      
    })
    test('it should print a bank statement with previous transactions', ()=> {
      const account = new BankAccount()
      account.deposit(50.00)
      account.withdraw(25.00)
      expect(account.showStatement()[0]).toEqual({transaction: 'deposit', amount: 50.00, date: '19/06/2023', total: 50.00})
      
    })
    test('it should show the total amount of money in your account', ()=> {
      const account = new BankAccount()
      account.deposit(50.00)
      account.withdraw(25.00)
      expect(account.showStatement()).toEqual([{transaction: 'deposit', amount: 50.00, date: '19/06/2023', total: 50.00},{transaction: 'withdrawal', amount: 25.00, date: '19/06/2023', total:25.00}])
      
    })
    test('it should console log all transactions', ()=> {
      const account = new BankAccount()
      account.deposit(50.00,"2023-01-13")
      account.withdraw(25.00)
      
      const consoleLogSpy = jest.spyOn(console, 'log');
      account.printStatement()
      expect(consoleLogSpy).toHaveBeenCalledWith('date || credit || debit || total');
      expect(consoleLogSpy).toHaveBeenCalledWith('19/06/2023 || ||25.00 || 25.00');
      expect(consoleLogSpy).toHaveBeenCalledWith('13/01/2023 || 50.00 || || 50.00');
      consoleLogSpy.mockRestore();
      
    })
})