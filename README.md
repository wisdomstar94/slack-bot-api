# How to get slack SIGNED_SECRET_KEY, BOT_USER_TOKEN
1. Access the url below.
```
https://api.slack.com/apps
```
2. Click the "Create New App button". <br /><img width="600" src="readme_images/slack-app-site-create-new-app.png" />
3. Click "From scratch".<br /><img src="readme_images/slack-app-site-create-new-app-modal.png" />
4. After selecting the app name and workspace to which the app will be applied, click the "Create App" button.<br /><img src="readme_images/slack-name-app-choose-workspace-modal.png" />
5. Click "Add features and functionality" under "Basic Information".<br /><img src="readme_images/slack-app-basic-information.png" />
6. Click "Permission".<br /><img src="readme_images/slack-app-basic-information-permission.png" />
7. Click the "Add an OAuth Scope" button in \[Scopes\] - \[Bot Token Scopes\].<br /><img src="readme_images/slack-permission-scopes-bot-token-scopes.png" />
8. Select "channels:read", "chat:write", "chat:write.public" from the Permission list.<br /><img src="readme_images/slack-permission-scopes-bot-token-scopes-permission-list.png" /><br /><img src="readme_images/slack-permission-scopes-bot-token-scopes-three.png" />
9. Click the "Install to Workspace" button in "OAuth Tokens for Your Workspace".<br /><img src="readme_images/slack-oAuth-tokens-for-your-workspace.png" />
10. Then you can check the SLACK_BOT_USER_TOKEN value as follows.<img src="readme_images/slack-bot-user-token-check.png" />
11. If you go back to "Basic Information" again and scroll down, you can also see "SLACK_SIGNED_SECRET_KEY".<img src="readme_images/slack-signed-secret-key.png" />

<br />
<br />

# How to get slack channel id
1. Right-click on a channel in the slack app and click "Open Channel Details". <br /><img src="readme_images/slack-channel-right-click.png" />
2. If you scroll to the bottom, you can see the channel id.<br /><img src="readme_images/slack-channel-id-check.png" />

<br />
<br />

# How to use this project

1. Enable "Interactivity" in "Interactivity & Shortcuts".<br /><img src="readme_images/slack-app-interactivity-shortcuts.png" />

2. Enter the following in "Request URL".<br /><img src="readme_images/slack-app-interactivity-request-url.png" />

3. Enable "Enable Events" in "Event Subscriptions".<br /><img src="readme_images/slack-event-subscriptions-enable.png" />

4. Enter the following in "Request URL".<br /><img src="readme_images/slack-app-event-subscriptions-request-url.png" />

5. And register the event you want to subscribe to in "Subscribe to bot events" at the bottom.<br /><img src="readme_images/slack-app-event-subscriptions-subscribe-to-bot-events.png" />

6. git clone this project.
```
git clone https://github.com/wisdomstar94/slack-bot-api.git
```
7. Move the path to the cloned project.
```
cd slack-bot-api
```
8. Install the node package.
```
npm i
```
9. Copy the files like this:
```
cp .env.sample .env
cp src/customs/slackButtonCallback.sample.js src/customs/slackButtonCallback.js
cp src/customs/slackEventAction.sample.js src/customs/slackEventAction.js
cp src/customs/slackMessageBlocks.sample.js src/customs/slackMessageBlocks.js
```
10. Write the COOKIE_SECRET_KEY, SLACK_SIGNED_SECRET_KEY, SLACK_BOT_USER_TOKEN, SLACK_CHANNEL_ID values ​​in the .env file.<br /><img src="readme_images/slack-env.png" />

11. Install pm2 globally.
```
npm i -g pm2
```
12. Enter the following command to start the service.
```
pm2 start pm2.config.js
```
<br /><img src="readme_images/slack-bot-api-pm2-list.png" >

13. When you call the endpoint below, a message is sent to the slack.
```
http://localhost:2510/slack/bot/message/send
```
<img src="readme_images/slack-bot-api-message-send-api-call.png" /><br />
<img src="readme_images/slack-channel-new-message.png" />

14. If you want to send a button when sending a message, you can send isButtonShow value to true when calling http://localhost:2510/slack/bot/message/send api. <br /><img src="readme_images/slack-bot-api-message-send-with-button-option.png" /><br />
<img src="readme_images/slack-channel-new-message-with-buttons.png" />

15. "src/customs/slackButtonCallback.js" can handle the button click callback. <br /><img src="readme_images/slack-bot-api-button-callback-file.png" />

16. "src/customs/slackEventAction.js" you can handle and handle various events fired by slack. <br /><img src="readme_images/slack-bot-api-event-action-file.png" />

17. "slackMessageBlocks.js" you can write the content of messages sent to slack. <br /><img src="readme_images/slack-bot-api-message-blocks.png" />