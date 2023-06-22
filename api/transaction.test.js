const Transaction = require('./transaction.js');

describe('Transaction', ()=> {
  beforeEach(()=>{
    transaction1 = new Transaction('deposit', 50.00, '2023-01-10')
    transaction2 = new Transaction('withdrawal', 25.00, '2023-01-13')
    transaction3 = new Transaction('withdrawal', 25.33, '2023-01-13')
    transaction4 = new Transaction('withdrawal', 25.337, '2023-01-13')
    transaction5 = new Transaction('withdrawal', 25.334, '2023-01-13')
    transaction6 = new Transaction('withdrawal', 25.334, 'erre')
  })
  test('can create deposits', ()=>{
    expect(transaction1.type).toEqual('deposit')
    expect(transaction1.amount).toEqual('50.00');
    expect(transaction1.date).toEqual('10/01/2023');
  }) 
  test('can create withdrawals', ()=>{
    expect(transaction2.type).toEqual('withdrawal')
    expect(transaction2.amount).toEqual('25.00');
    expect(transaction2.date).toEqual('13/01/2023');
  }) 
  test('can log amounts with 2 decimal places', ()=>{
    expect(transaction3.type).toEqual('withdrawal')
    expect(transaction3.amount).toEqual('25.33');
    expect(transaction3.date).toEqual('13/01/2023');
  }) 
  test('can round up transactions when above #.##5', ()=>{
    expect(transaction4.type).toEqual('withdrawal')
    expect(transaction4.amount).toEqual('25.34');
    expect(transaction4.date).toEqual('13/01/2023');
  }) 
  test('can round down transactions when below #.##5', ()=>{
    expect(transaction5.type).toEqual('withdrawal')
    expect(transaction5.amount).toEqual('25.33');
    expect(transaction5.date).toEqual('13/01/2023');
  }) 
  test('can take date input when properly formatted', ()=>{
    expect(transaction5.type).toEqual('withdrawal')
    expect(transaction5.amount).toEqual('25.33');
    expect(transaction5.date).toEqual('13/01/2023');
  }) 
  test('if date not given inputs todays date', ()=>{
    today = new Date().toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    expect(transaction6.type).toEqual('withdrawal')
    expect(transaction6.amount).toEqual('25.33');
    expect(transaction6.date).toEqual(today);
  }) 
})