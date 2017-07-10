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
        pattern: '\\b(balance)\\b',
        intent: 'AccountBalance'
    },
    
    {
        pattern: '\\b(history)\\b',
        intent: 'TransactionsHistory'
    }, 
    
    {
	   pattern: '\\b(?<timeframe>past|last|upcoming|future)\\b\\s\\b(?<total>.+)\\b\\stransactions',
	   intent: 'TransactionsHistory'
    },
    
    {
       pattern: '\\b(?<total>1|2|3)\\b\\s\\b(?<timeframe>.+)\\b\\stransaction',
	   intent: 'TransactionsHistory'
    },

    {  
	   pattern: 'details\\sof\\s\\b(?<number>.+)',
	   intent: 'TransactionDetails'
    },
    
    {
	   pattern: '\\b(?<number>.+)\\b\\swith details',
       intent: 'TransactionDetails'
    },
        
    {
        pattern: '\\b(thank you|thanks)\\b',
        intent: 'Thanks'
    },
    
    {
        pattern: '\\b(bye|exit)\\b',
        intent: 'Exit'
    }
    
];

module.exports = patternToIntentMapping;