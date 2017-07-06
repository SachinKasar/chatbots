const patternToIntentMapping = [
    {
	   pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
	   intent: 'Hello'
    },
    
    {
        pattern: '\\b(good|fine)\\b',
        intent: 'UserReplied'
    },
     {
        pattern: '\\b(balance|1)\\b',
        intent: 'AccountBalance'
    },
    {
        pattern: '\\b(transactions|2)\\b',
        intent: 'TransactionsHistory'
    }, 
    {
        pattern: '\\b(transaction details of 1234567|details of 1234567|1234567|3)\\b',
        intent: 'TransactionDetails'
    },
    {
        pattern: '\\b(bye|exit)\\b',
        intent: 'Exit'
    }
];

module.exports = patternToIntentMapping;