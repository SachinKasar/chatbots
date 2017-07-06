'use strict';
const patterns = require('../patterns');
const XRegExp = require('xregexp');

let getEntities = (str, pattern) => {
	let entities =  XRegExp.exec(str, XRegExp(pattern, "i"));
    // console.log(' entities  ----- ' + entities );
    return entities;
}

let matchPattern = (str, cb) => {
    // 1. Match user input with available patterns
	let mappedPattern = patterns.find(item => {
		if(XRegExp.test(str, XRegExp(item.pattern, "i"))) {
			return true;
		}
	});

	if(mappedPattern) {
        // 1. Once patterns matched create intent and entities object
		return cb({
			intent: mappedPattern.intent,
			entities: getEntities(str, mappedPattern.pattern)
		});
	} else {
		return cb({});
	}
}

module.exports = matchPattern;