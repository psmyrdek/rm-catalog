import axios from 'axios';

const APP_URL = 'https://d1hhcbyox0skqu.cloudfront.net';
const APP_SELECTOR = 'id="app"';

const WEBHOOK_URL =
  'https://hooks.slack.com/services/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';

async function conductHealthcheck() {
  try {
    const { data: htmlContent } = await axios.get(APP_URL);
    const hasSelector = checkForSelector(htmlContent, APP_SELECTOR);
    await sendSlackMessage(hasSelector);
  } catch (error) {
    await sendSlackMessage(false);
  }
}

async function sendSlackMessage(healthcheckResult) {
  await axios.post(WEBHOOK_URL, {
    text: `GHA Healtcheck for: ${APP_URL}`,
    attachments: [
      {
        fallback: `Result - ${healthcheckResult ? 'Success' : 'Failure'}`,
        text: `Result - ${healthcheckResult ? 'Success' : 'Failure'}`,
        color: healthcheckResult ? 'good' : 'danger',
      },
    ],
  });
}

function checkForSelector(htmlContent, selector) {
  return htmlContent.includes(selector);
}

await conductHealthcheck();
