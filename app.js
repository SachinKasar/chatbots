'use strict';

const readline = require('readline');
 
 

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

const matcher = require('./matcher');
const bankingServices = require('./banking-services');
const {} = require('./parser');
 


let showCustomerServices = () => {
    console.log(" Thats superb!".bold.yellow);
    console.log(" With my hlep you can get...".bold.yellow);
    console.log("   1 Account balance".bold.yellow);
    console.log("   2 Transactions history".bold.yellow);
    console.log("   3 Transaction details".bold.yellow);
    console.log("   Please enter an option number (1/2/3) ".bold.yellow);
}

let transactionHistory = () => {
    console.log(" Your last 2 transactions [Txn] are as... ".bold.yellow);
    console.log(" Txn# 1234567 with $200".bold.yellow)
    console.log(" Txn# 3344566 with $800".bold.yellow)
}

let transactionDetails = () => {
    console.log(" Details of Txn#1234567... ".bold.yellow);
    console.log(" Amount - $200".bold.yellow);
    console.log(" At - McDonalds".bold.yellow);
    console.log(" Type - debited".bold.yellow);
    console.log(" Location - Xyz Lane".bold.yellow);
    console.log(" Date - 29 June 2017".bold.yellow);
}


rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
	matcher(reply, data => {
        console.log( "data ---- ", data );
		switch(data.intent) {
			case 'Hello':
                console.log( "111 data ---- " , data.entities.greeting );
				console.log(data.entities.greeting.bold.yellow + " ,how are you doing ?".bold.yellow);
				rl.prompt();
				break;
			 
            case 'UserReplied':
				showCustomerServices();
                rl.prompt();
				break;
                
            case 'AccountBalance':
				console.log(" You have balance of $1500 in your account ".bold.yellow);
                rl.prompt();
				break;
                
            case 'TransactionsHistory':
				transactionHistory();
                rl.prompt();
				break;
                
            case 'TransactionDetails':
				transactionDetails();
                rl.prompt();
				break;
                
            case 'Exit':
                console.log("Bye, see you again, have a great day ahead!".bold.yellow);
                process.exit(0);
				break;
                
			default: {
				console.log("I don't seem to understand what you really mean :(".bold.yellow);
				rl.prompt();
			}
		}
	});
});
