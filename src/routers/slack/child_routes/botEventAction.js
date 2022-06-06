const slackEventAction = require('../../../customs/slackEventAction');

const botEventAction = async(req, res, next) => {
  slackEventAction(req, req.body);
  res.json({ result: 'success' });
  return;
};

module.exports = botEventAction;
