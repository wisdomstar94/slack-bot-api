const express = require('express');
const router = express.Router();
const botMessageSendRouter = require('./child_routes/botMessageSend');
const botCallbackRouter = require('./child_routes/botCallback');
const botEventActionRouter = require('./child_routes/botEventAction');

router.post('/bot/message/send', botMessageSendRouter);
router.post('/bot/callback', botCallbackRouter);
router.post('/bot/eventAction', botEventActionRouter);

module.exports = router;
