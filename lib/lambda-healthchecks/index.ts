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

export const handler: Handler<EventInput, LambdaResponse> = async (event) => {
  const { url, selector } = event;
  const { data: htmlContent } = await axios.get<string>(url);
  const hasSelector = checkForSelector(htmlContent, selector);
  console.log(`Selector ${selector} ${hasSelector ? 'found' : 'not found'} at ${url} `);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'HTML content fetched',
      hasSelector,
    }),
  };
};

function checkForSelector(htmlContent: string, selector: string) {
  return htmlContent.includes(selector);
}
