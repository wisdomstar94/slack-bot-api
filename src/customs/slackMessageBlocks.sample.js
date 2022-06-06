/*
  https://app.slack.com/block-kit-builder/

  Please refer to the address above for detailed options.
*/
const slackMessageBlocks = function(req, message) {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: message,
      },
    },
    {
      type: "divider",
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          style: "primary",
          text: {
            type: "plain_text",
            text: "button 1",
            emoji: true,
          },
          value: "button1_value",
        },
        {
          type: "button",
          style: "danger",
          text: {
            type: "plain_text",
            text: "button 2",
            emoji: true,
          },
          value: "button2_value",
          url: "https://google.com",
        },
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "button 3",
            emoji: true,
          },
          value: "button3_value",
          url: "https://example.com",
        },
      ],
    },
  ];
};

module.exports = slackMessageBlocks;
