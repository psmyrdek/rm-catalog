import OpenAI from 'openai';
import 'dotenv/config';
import { readFileSync } from 'fs';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

async function main() {
  console.log('🔮 Calling GPT-4 to explain the issue...');

  const errorLog = readFileSync('./error.log', 'utf-8');

  if (!errorLog) {
    console.log('No error log found. Exiting...');
    return;
  }

  const prompt = `
    Explain an error that occurred during the CI/CD workflow and suggest a solution to fix it.

    Follow these rules:
    - Be concise and to the point.
    - Avoid repeating my question in the answer.
    - Do not include any sensitive information.
    - Do not repeat the same information.
    - List files that are relevant to the error.

    The error log is wrapped with the tag ERROR_LOG.

    <ERROR_LOG>
    ${errorLog}
    </ERROR_LOG>
  `;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4-0125-preview',
  });

  const modelResponse = chatCompletion.choices[0].message.content!;

  console.log(modelResponse);
}

main();
