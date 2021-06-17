const slackIRC = require('slack-irc')

const config = {
  nickname: process.env.IRC_NICKNAME,
  server: process.env.IRC_SERVER,
  token: process.env.SLACK_TOKEN,
  avatarUrl: 'https://robohash.org/$username.png',
  channelMapping: JSON.parse(process.env.CHANNEL_MAPPING),
  ircOptions: {
    port: 6697,
    sasl: true,
    secure: true,
    selfSigned: true,
    certExpired: true,
    debug: true,
    nick: process.env.IRC_NICKNAME,
    userName: process.env.IRC_NICKNAME,
    password: process.env.IRC_PASSWORD
  }
}

slackIRC(config)
