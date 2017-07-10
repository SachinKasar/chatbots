# chatbots for banking application
**This repository is about how to create simple Nodejs based Chatbots**

 

1. This is pure nodejs base implementation of banking bot.
2. Basic idea is that user will ask some service by giving 
   some input, pattern matching will be done to understand 
   a. "Intent" and b. useful information ("Entites") 
3. This bot will serve basic banking customer services as... 
      - Greeting message from bot
      - Get Account Balance
      - Get Transactions History
	  - Get history for specific numbers of transactions
	  - Get Upcoming Transactions
	  - Get specific numbers of upcoming transactions
	  - Get transaction details
4. User can ask service with human language and bot will response to it in human like language.
	

	
**Modules used**

Module Name | Purpose
----------- | -------------
readline | Simple streaming readline module for NodeJS
colors | Get colors and styles in NodeJS console
nodemon | Simple monitor script for use during development of a node.js app
xregexp | Extended regular expressions


**Steps to follow**

:one: clone git repo with 
**npm clone https://github.com/SachinKasar/chatbots.git**

:two: install npm packages with command
**npm install**

:three: start application with command
**nodeman app.js**


**Please refer below screenshot for user and chatbot(marked yellow) conversation**

![bot](https://user-images.githubusercontent.com/17163705/28005757-028b294a-656a-11e7-8c95-436224ba5925.png)

