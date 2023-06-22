class Transaction {
  constructor(type, amount, date){
    this.type = type;
    this.amount = amount.toFixed(2);
    this.date = this.currentDate(date);
    this.formatCheck()
  } 

  private
  
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

  formatCheck(){
    if( this.date ==='Invalid Date'){
      this.date = this.currentDate()
    }
  }
}

module.exports = Transaction 