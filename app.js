'use strict';

const readline = require('readline');  
 
 

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

const matcher = require('./matcher');
const {getAccountBalance, getTransactionHistory, getTransactionDetails} = require('./banking-services');
const {currentBalance} = require('./parser');
 


let showCustomerServices = () => {
    console.log(" Thats superb!".bold.yellow);
    console.log(" With my help you can get...".bold.yellow);
    console.log("   1 Account balance".bold.yellow);
    console.log("   2 Transactions history".bold.yellow);
    console.log("   3 Transaction details".bold.yellow);
    console.log("   Please enter an option number (1/2/3) ".bold.yellow);
}
 


rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
	matcher(reply, data => {
        //console.log( "data ---- ", data );
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
				console.log("Let me check...".bold.yellow);
				getAccountBalance()
					.then(response => {
                        console.log(currentBalance(response).bold.yellow)
				        rl.prompt();
					})
					.catch(error => {
						console.log("Service connection issue, Please try again !", error);
						rl.prompt();
					});
				break;
                
            case 'TransactionsHistory':
                 console.log("Let me check...".bold.yellow);
				 getTransactionHistory(data.entities.timeframe,data.entities.total)
					.then(response => {
                        console.log(response.bold.yellow)
				        rl.prompt();
					})
					.catch(error => {
						console.log("Service connection issue, Please try again!", error);
						rl.prompt();
					});
				break;
                
            
            case 'TransactionDetails':
				console.log("Let me check...".bold.yellow);
				getTransactionDetails(data.entities.number)
					.then(response => {
                        console.log(response.bold.yellow)
				        rl.prompt();
					})
					.catch(error => {
						console.log("Service connection issue, Please try again!", error);
						rl.prompt();
					});
				break;
                
            case 'Thanks':
                console.log("No problem, happy to help you".bold.yellow);
                rl.prompt();
				break;
                
            case 'Exit':
                console.log("Bye, see you again, have a great day ahead!".bold.yellow);
                process.exit(0);
				break;
                
			default: {
				console.log("I don't seem to understand what you really mean !!!".bold.yellow);
				rl.prompt();
			}
		}
	});
});
