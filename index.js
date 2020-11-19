const slackIRC = require('slack-irc')

const config = {
  nickname: process.env.IRC_NICKNAME,
  server: process.env.IRC_SERVER,
  token: process.env.SLACK_TOKEN,
  avatarUrl: 'https://robohash.org/$username.png',
  channelMapping: JSON.parse(process.env.CHANNEL_MAPPING),
  autoSendCommands: JSON.parse(process.env.AUTO_SEND_COMMANDS)
}

slackIRC(config)
