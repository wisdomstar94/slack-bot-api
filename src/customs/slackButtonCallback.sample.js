const slackClient = require('../librarys/getSlackClient');
const Logger = require('../librarys/Logger');
const axios = require('axios');

const slackButtonCallback = async(req, payloadJsonObj) => {
  /*
    "payloadJsonObj Data Structure Sample"

    {
      type: 'block_actions',
      user: {
        id: 'AAABBBCCCDD',
        username: 'test123',
        name: 'honggildong',
        team_id: 'T0001112223'
      },
      api_app_id: 'AABBCCDDEEF',
      token: 'AA!@SBBBVVC444CCCDD66666',
      container: {
        type: 'message',
        message_ts: '1654503163.721519',
        channel_id: 'AABB1122334',
        is_ephemeral: false
      },
      trigger_id: '3001112223334.3600011122233.a12345a4a01234c01234abc01ab012a0',
      team: { id: 'T0000000ZT0', domain: 'sample-abc0123' },
      enterprise: null,
      is_enterprise_install: false,
      channel: { id: 'A00AAA0000A', name: 'test' },
      message: {
        bot_id: 'A00AA0AAA0A',
        type: 'message',
        text: '이 콘텐츠는 표시할 수 없습니다.',
        user: 'A00AAA0A0A0',
        ts: '1654503163.721519',
        app_id: 'A00AA000A0A',
        team: 'A00A0000AA0',
        blocks: [
          {
            type: 'section',
            block_id: 'aB0',
            text: { type: 'mrkdwn', text: 'Hello World!', verbatim: false }
          },
          { type: 'divider', block_id: 'abCd' },
          {
            type: 'actions',
            block_id: '0aBC0',
            elements: [
              {
                type: 'button',
                action_id: '0aB',
                text: { type: 'plain_text', text: 'button 1', emoji: true },
                style: 'primary',
                value: 'button1_value'
              },
              {
                type: 'button',
                action_id: '01A',
                text: { type: 'plain_text', text: 'button 2', emoji: true },
                style: 'danger',
                value: 'button2_value',
                url: 'https://google.com'
              },
              {
                type: 'button',
                action_id: 'AbC',
                text: { type: 'plain_text', text: 'button 3', emoji: true },
                value: 'button3_value',
                url: 'https://google.com'
              }
            ],
          }
        ],
      },
      state: { values: {} },
      response_url: 'https://hooks.slack.com/actions/A00A0000AA0/3600000000000/aaAA0BBcDefGHaAbcDeF0hIj',
      actions: [
        {
          action_id: '0ab',
          block_id: '0aBC0',
          text: [Object],
          value: 'button1_value',
          style: 'primary',
          type: 'button',
          action_ts: '1654503352.228053'
        }
      ]
    }
  */

  const actions = payloadJsonObj.actions;
  const action = actions[0];
  const channelID = payloadJsonObj.channel.id;
  const message = payloadJsonObj.message;
  const value = action.value;

  let reply_message = 'button clicked!';

  // Modify the switch statement below according to the situation.
  switch (value) {
    case 'button1_value': 
      reply_message = 'you clicked button 1';
      await axios.get('http://localhost:9020/test/test6?type=button1');
      break;
    case 'button2_value': 
      reply_message = 'you clicked button 2';
      await axios.get('http://localhost:9020/test/test6?type=button2');
      break;
    case 'button3_value': 
      reply_message = 'you clicked button 3';
      await axios.get('http://localhost:9020/test/test6?type=button3');
      break;
  }

  Logger.info(req.logHeadTail + 'slackClient.chat.update call try.');
  slackClient.chat.update({
    channel: channelID,
    ts: message.ts,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: reply_message,
        },
      },
    ],
  }).then(() => {
    Logger.info(req.logHeadTail + 'slackClient.chat.update call success.');
  }).catch((error) => {
    Logger.error(req.logHeadTail + 'slackClient.chat.update call error.');
    Logger.error(req.logHeadTail + 'error : ' + error.stack);
  });
};

module.exports = slackButtonCallback;