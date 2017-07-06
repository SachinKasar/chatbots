'use strict';
//const hrrp = require('http');

let getAccountBalance = () => {
	return new Promise((resolve, reject) => {
        // TODO : Replace mocked setTimeout by http async call later. 
        setTimeout(() => {
           resolve('1500');
        },2000)
    });
}


let getTransactionHistory = () => {
    let transactionsToReturn = [];
    
    // TODO : Replace mocked transactions data and setTimeout by http async call later. 
    const transactons = [
        " Txn# 1234567 with $200",
        " Txn# 3344566 with $800",
        " Txn# 5678901 with $300"
    ];
    
    transactionsToReturn.push(" Your last " + transactons.length +" transactions [Txn] are as... ");
    for (const txn of transactons) {
        transactionsToReturn.push(txn);
    }

     return new Promise((resolve, reject) => {
        // TODO : Replace mocked setTimeout by http async call later. 
        setTimeout(() => {
            resolve(transactionsToReturn.join('\r\n'));
        },2000)
    });
}


let getTransactionDetails = (transactionNumber) => {
    let trDetailsToReturn = [];
    
    // TODO : Replace mocked transactions data and setTimeout by http async call later. 
    const transactonDetails = [
        " Details of Txn#"+transactionNumber+"... ",
        " Amount - $200",
        " At - McDonalds",
        " Type - debited",
        " Location - Xyz Lane",
        " Date - 29 June 2017"
    ];
    
    
    for (const txnDetails of transactonDetails) {
        trDetailsToReturn.push(txnDetails);
    }
    
    return new Promise((resolve, reject) => {
        // TODO : Replace mocked setTimeout by http async call later. 
        setTimeout(() => {
            resolve(trDetailsToReturn.join('\r\n'));
        },2000)
    });
}
 

module.exports = {
    getAccountBalance,
    getTransactionHistory,
    getTransactionDetails
};


 