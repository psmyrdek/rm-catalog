const { SLACK_WEBHOOK_URL, NOTIFY_MESSAGE, NOTIFY_TYPE } = process.env;

if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_WEBHOOK_URL env variable is required');
}

if (!NOTIFY_MESSAGE) {
  throw new Error('MESSAGE env variable is required');
}

const requestConfig = {
  url: SLACK_WEBHOOK_URL,
  message: NOTIFY_MESSAGE,
  type: NOTIFY_TYPE || 'good',
};

console.log(requestConfig);
