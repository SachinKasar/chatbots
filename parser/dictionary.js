let history = [ 
    {
        codes: ['past','last','history'],
        response: "You have paid "
    },
    {
        codes: ['historySingle','historySingle'],
        response: " last transaction"
    },
    {
        codes: ['historyMultiple','historyMultiple'],
        response: " last transactions"
    }
];

let upcoming =  [ 
    {
        codes: ['upcoming', 'future'],
        response: "You will have to pay "
    },
    {
        codes: ['upcomingSingle','upcomingSingle'],
        response: " upcoming transaction"
    },
    {
        codes: ['upcomingMultiple','upcomingMultiple'],
        response: " upcoming transactions"
    }
];

module.exports = {
	history,
	upcoming
}

