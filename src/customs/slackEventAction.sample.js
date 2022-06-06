const Logger = require('../librarys/Logger');

const slackEventAction = async(req, eventAction) => {
  /*
    "eventAction data structure example"

    {
      token: 'abc123abc123abc123abc123',
      team_id: 'A0123456ABC',
      api_app_id: 'A01AB011ABC',
      event: {
        client_msg_id: '0abcd000-00ab-00a0-0a0a-0123456a01aa',
        type: 'message',
        text: 'zzzzz',
        user: 'A01AB12ABCD',
        ts: '1654512087.674989',
        team: 'A0123456ABC',
        blocks: [ [Object] ],
        channel: 'A01ABC0123A',
        event_ts: '1654512087.674989',
        channel_type: 'channel'
      },
      type: 'event_callback',
      event_id: 'abc01234abcd',
      event_time: 1654512087,
      authorizations: [
        {
          enterprise_id: null,
          team_id: 'A0123456ABC',
          user_id: 'A01AB12ABCD',
          is_bot: true,
          is_enterprise_install: false
        }
      ],
      is_ext_shared_channel: false,
      event_context: '0-abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc'
    } 
  */

  // Modify the switch statement below according to the situation.
  switch (eventAction.event.type) {
    case 'message':
      Logger.info(req.logHeadTail + 'event.type : ' + eventAction.event.type);
      // input yout action...
      break;
    case 'other event ...':
      Logger.info(req.logHeadTail + 'event.type : ' + eventAction.event.type);
      // input yout action...
      break;
    default: 

      break;
  }
};

module.exports = slackEventAction;