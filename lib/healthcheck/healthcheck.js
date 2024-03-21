import axios from 'axios';

const APP_URL = 'https://d1hhcbyox0skqu.cloudfront.net';
const APP_SELECTOR = 'id="app"';

const { WEBHOOK_URL } = process.env;

async function conductHealthcheck() {
  try {
    const { data: htmlContent } = await axios.get(APP_URL);
    const hasSelector = checkForSelector(htmlContent, APP_SELECTOR);
    await sendSlackMessage(hasSelector);
  } catch (error) {
    console.error('Error while conducting healthcheck:', error.message);
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
