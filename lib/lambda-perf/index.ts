const { CloudWatchClient, PutMetricDataCommand } = require('@aws-sdk/client-cloudwatch');
import { Handler } from 'aws-lambda';

interface EventInput {
  body: string;
}

interface LambdaResponse {
  statusCode: number;
  body: string;
}

const cloudWatchClient = new CloudWatchClient({ region: 'eu-central-1' });

export const handler: Handler<EventInput, LambdaResponse> = async (event) => {
  const { loadTimeMs } = JSON.parse(event.body);

  if (!loadTimeMs) {
    return {
      statusCode: 400,
      body: `Missing loadTimeMs in the request body.`,
    };
  }

  const params = {
    MetricData: [
      {
        MetricName: 'WebsiteLoadTime',
        Unit: 'Milliseconds',
        Value: loadTimeMs,
      },
    ],
    Namespace: 'RMCatalogMetrics',
  };

  const command = new PutMetricDataCommand(params);
  await cloudWatchClient.send(command);
  return {
    statusCode: 200,
    body: `Lamba executed successfully.`,
  };
};
