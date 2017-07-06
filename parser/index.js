'use strict';

const colors = require('colors');
const dictionary = require('./dictionary');
const moment = require('moment');

// TODO

 

 

let currentBalance = response => {
	if(response) {
		return ("You have balance of $" + response + " in your account").bold.yellow;
     } else {
		return "You have baalance of $0";
	 }
}

 
 

module.exports = {
	 currentBalance
}