import { Handler } from 'aws-lambda';
import axios from 'axios';

interface EventInput {
  url: string;
  selector: string;
}

interface LambdaResponse {
  statusCode: number;
  body: string;
}

const WEBHOOK_URL =
  'https://hooks.slack.com/services/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';

export const handler: Handler<EventInput, LambdaResponse> = async (event) => {
  const { url, selector } = event;
  const { data: htmlContent } = await axios.get<string>(url);
  const hasSelector = checkForSelector(htmlContent, selector);
  await sendSlackMessage(url, hasSelector);
  return {
    statusCode: 200,
    body: `Lamba executed successfully.`,
  };
};

async function sendSlackMessage(appUrl: string, healthcheckResult: boolean) {
  await axios.post(WEBHOOK_URL, {
    text: `AWS Healtcheck for: ${appUrl}`,
    attachments: [
      {
        fallback: `Result - ${healthcheckResult ? 'Success' : 'Failure'}`,
        text: `Result - ${healthcheckResult ? 'Success' : 'Failure'}`,
        color: healthcheckResult ? 'good' : 'danger',
      },
    ],
  });
}

function checkForSelector(htmlContent: string, selector: string) {
  return htmlContent.includes(selector);
}
