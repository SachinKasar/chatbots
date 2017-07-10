'use strict';

//const hrrp = require('http');
const {currentBalance,getResponsePrefix,getSingleOrPluralResponse} = require('../parser');



// TODO : Replace mocked transactions data and setTimeout by http async call later. 
const transactonsHistory = [
    " Txn# 111111 with $100",
    " Txn# 222222 with $200",
    " Txn# 333333 with $300"
];

const upcomingPayments = [
    " Txn# 777777 with $400",
    " Txn# 666666 with $500",
    " Txn# 888999 with $600"
];


let getAccountBalance = () => {
	return new Promise((resolve, reject) => {
        // TODO : Replace mocked setTimeout by http async call later. 
        setTimeout(() => {
           resolve('1500');
        },2000)
    });
}


let getTransactionHistory = (timeframe='last',total=3) => {
    let transactionsToReturn = [];
    let transactionsOnDemand = [];
    let type = "";
    
    if(timeframe && (timeframe === "upcoming" ||   timeframe === "future")) {
        transactionsOnDemand = upcomingPayments;
        type = 'upcoming';
    } else {
        transactionsOnDemand = transactonsHistory;
        type = 'history';
    }
    
    let countString = total == 1 ? (type+"Single") : (type+"Multiple");
     
    let response = getResponsePrefix(timeframe,type) + "for " + total + getSingleOrPluralResponse(countString,type);
     
    return new Promise((resolve, reject) => {
        transactionsToReturn.push(response);
        for (let i=0; i<total; i++) {
            transactionsToReturn.push(transactionsOnDemand[i]);
        }
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