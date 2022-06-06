require('dotenv').config();
const Logger = require('../../../librarys/Logger');
const slackClient = require('../../../librarys/getSlackClient');
const slackMessageBlocks = require('../../../customs/slackMessageBlocks');

const botMessageSend = async(req, res, next) => {
  let return_message = '';

  const {
    message,
    isButtonShow,
  } = req.body;

  if (typeof message !== 'string') {
    return_message = 'There are no messages.';
    Logger.error(req.logHeadTail + 'response : ' + return_message);
    res.send(return_message);
    return;
  }

  let blocks;
  if (isButtonShow === true) {
    blocks = slackMessageBlocks(req, message);
  }

  slackClient.chat.postMessage({
    text: message,
    channel: process.env.SLACK_CHANNEL_ID,
    blocks: blocks,
  })
  .then((value) => {
    Logger.info(req.logHeadTail + 'slack channel message send success!'); 
  })
  .catch((error) => {
    Logger.error(req.logHeadTail + 'error.stack : ' + error.stack);
    Logger.error(req.logHeadTail + 'slack channel message send failure!');
  });
  
  return_message = 'Completed an attempt to send a message to a specific bot on a Slack channel.';
  Logger.info(req.logHeadTail + 'response : ' + return_message);
  res.json({ result: 'success', msg: return_message });
  return;
};

module.exports = botMessageSend;
