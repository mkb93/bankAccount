# Getting started with making an account and running the app

(you will have to install node version manager if you dont have it installed already use the link below)
https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/
# Setup our environment to use node latest version
$ nvm use node  

# Create the project directory
$ mkdir my-project
$ cd my-project

# Initialise the NPM project (this will create a file package.json)
$ npm init -y

# Add the jest package to our project
# (this will update package.json and package-lock.json)
$ npm add jest

# Also install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest

# Run our tests
$ jest


# You are ready to go
## to run using REPL run the lines in this order

node

const BankAccount = require('./app.js')

account = new BankAccount

now you can withdraw or deposit money 

#to withdraw
account.withdraw(amount) 
to withdraw specific amount

account.withdraw(amount, customDate)
to withdraw a specific amount from a specific date. the customDate format should be 'YYYY-MM-DD'

#to deposit
account.deposit(amount)
to deposit a specific amount 

account.deposit(amount, customDate)
to deposit a specific amount from a specific date. the customDate format should be 'YYYY-MM-DD'


#seeing your transactions
you can use account.showStatement() to see statements in object format

or account.printStatement() to print it on the terminal in the format makers suggested





#Notes
I display the print statement with console log because we are interacting with the terminal.
the test I used on this is the spyOn method of jest. In order for this test to work make sure you have Jest 21.1.0 installed.