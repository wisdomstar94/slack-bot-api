const slackButtonCallback = require('../../../customs/slackButtonCallback');

const botCallback = async(req, res, next) => {
  const {
    payload, // json string (not object!)
  } = req.body;
  
  const payloadJsonObj = JSON.parse(payload);

  slackButtonCallback(req, payloadJsonObj);
  res.json({ result: 'success' });
  return;
};

module.exports = botCallback;
