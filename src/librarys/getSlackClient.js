require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_BOT_USER_TOKEN;
module.exports = new WebClient(token);
