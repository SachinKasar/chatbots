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

let getResponsePrefix = (code='past', type='history') => {
	let historyResponsePrefix = dictionary[type].find(item => {
        if(item.codes.indexOf(code) > -1) {
			return true;
		}
	});
 	return historyResponsePrefix.response || "";
}

let getSingleOrPluralResponse = (code='pastSingle', type='history') => {
	let singleOrPluralResponse = dictionary[type].find(item => {
		if(item.codes.indexOf(code) > -1) {
			return true;
		}
	});

	return singleOrPluralResponse.response || "";
}


module.exports = {
    currentBalance,
    getResponsePrefix,
    getSingleOrPluralResponse
}