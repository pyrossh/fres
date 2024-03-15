---
title: Gopibot to the rescue
description: A slackbot for deploying your applications (chatops)
image: /images/gopibot.png
date: 2017-04-19
tags:
  - nodejs
  - slack
  - bot
  - chatops
published: true
---

High Ho Gopibot away!

Everybody please meet Gopibot our chatops bot which I built at Numberz to help us deploy our countless microservices to QA.

![Gopibot 1](/images/gopibot.png)

So here is the backstory,  
I was one of the developers who had access to our QA and Prod servers and the other person was the Head of Engineering and he is generally a busy guy.
So whenever there is a change that needs to be deployed everyone comes to me and tells me to deploy their microservice/frontend to the QA and blatantly
interrupts my awesome coding cycle.

Alright then, I break off from my flow, ssh into the server and start running the deploy command. And all of you jsdev wannabes who have worked with react and webpack will know the horrors about deploying frontend code right. It takes forever so I have to wait there looking at the console along with the dev who wanted me to deploy it (lets call him @kokill for now). So @kokill and I patiently wait for the webpack build to finish. 1m , 2m, 3m and WTH 15m. And then its built and the new frontend is deployed to QA. YES! Now I can continue with my work. But wait then some other dev comes likes call him (@D-Ne0) and he asks to deploy something else and again the same process of ssh’ing the server and another wait. This got repetitive and irritating.

Then I started searching for solutions to the problem and looked high and low and thought that CI/CD is the only thing that can solve this problem. But then I saw something new called ChatOps where developers have chatbots to talk to automate this manual work. Just like we have bots these days to help you out in your work like getting your laundry, grocery and making orders.

So I decided to take a shot at this in my free time. And it seems it was simpler than I thought and decided to use Slack our primary team communication platform. We used it daily for everything and I thought why not have a specific channel just where the bot resides and people could talk to the bot.

Since we are typically a nodejs shop I decided to find a way to send messages to a slack bot. And slack has this really great sdk for nodejs.
https://github.com/slackapi/node-slack-sdk  
First I went and created the bot in my slack team settings. And then wrote a script which would allow it to read messages from the channel it was added.

Here is the simple script,

```js
const RtmClient = require('@slack/client').RtmClient;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const bot_token = process.env.SLACK_BOT_TOKEN;

const rtm = new RtmClient(bot_token);
const COMMANDS = {
	web: 'ssh -i qa.pem user@url docker pull image-name && docker rm -f container-id && docker run -d image-name'
};
let deploymentInProgress = false;
let counter = 0;

rtm.on(RTM_EVENTS.MESSAGE, (event) => {
	console.log('Got event', event);
	if (
		(event.subtype === 'message_changed' || event.subtype === 'message_deleted') &&
		event.text &&
		event.text.indexOf('$slackBotId') > -1
	) {
		return rtm.sendMessage(
			'Please dont change the message and expect me to correct your past mistakes',
			event.channel
		);
	}
	if (event.subtype) {
		return;
	}
	if (event.type === 'message' && event.text && event.text.indexOf('$slackBotId') > -1) {
		if (deploymentInProgress === true) {
			counter = counter + 1;
			if (counter > 3) {
				counter = 0;
				return rtm.sendMessage(
					"Stop bugging me noob or I'll tell to raise you bugs",
					event.channel
				);
			}
			return rtm.sendMessage('I am already processing a deploy request please wait', event.channel);
		}
		var input = event.text.trim().replace('$slackBotId ', '');
		console.log('Got input', input);
		const arr = input.split(' ');
		arr.forEach((word) => {
			word = word.replace(/\s/g, '');
		});
		const currCommand = arr[0];
		if (COMMANDS.indexOf(currCommand) > -1) {
			rtm.sendMessage('Starting to deploy ${currCommand}', event.channel);
			const ssh = spawn(COMMANDS[currCommand]);
			deploymentInProgress = true;
			ssh.stdout.on('data', (data) => {
				rtm.sendMessage(data, event.channel);
			});
			ssh.stderr.on('data', (data) => {
				rtm.sendMessage(data, event.channel);
			});
			ssh.on('close', (code) => {
				deploymentInProgress = false;
				if (code === 0) {
					console.log('Deployed Successfully', currCommand);
					rtm.sendMessage('Deployed Successfully ' + currCommand, event.channel);
				} else {
					console.log('child process exited with code ', code);
					rtm.sendMessage('child process exited with code ' + code);
				}
			});
			return;
		} else {
			counter = counter + 1;
			if (counter > 3) {
				counter = 0;
				return rtm.sendMessage(
					"Stop bugging me noob or I'll tell <@U30TXGLS1|gopi> to raise you bugs",
					event.channel
				);
			}
			return rtm.sendMessage(
				`command '${event.text} ' not found.You need to specify one of these commands [${COMMANDS.map(
					(v, k) => k
				).join(',')} ]`,
				event.channel
			);
		}
	}
});
console.log('Starting deploybot');
rtm.start();
```

So what the bot does is when someone mentions the bot with a command to run. It first checks if the command is defined in our COMMANDS map and then if
it is, it executes the corresponding shell command for it on our QA server and then gives back progress/error/finished messages back to the channel so
that everyone will be notified that someone had done a deployment. This is how it looks like,

Anyways to just have a boring bot that just runs boring commands was kinda boring. I thought of spicing up the bot interaction by making it say weird
things if you keep giving it invalid commands. Making it more of a life like bot.

Initially the bot was called deploybot and had a rocket icon but then there was our QA/Bug creator/Hell Raiser/Injoker in our team so I thought creating
a mini him would be better and give the bot a real person’s personality and it worked and people kind a started talking to bot some random stuff and
all.

Further on we can maybe introduce natural language processing and deep learning to make the bot learn from our messages and not just take a single
command. Like instead of me saying @gopibot cfm I can say @gopibot please deploy our cashflow server or please revert the deployment to the previous
version and things like that.
