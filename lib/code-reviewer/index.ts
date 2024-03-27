import OpenAI from 'openai';
import { Octokit } from '@octokit/rest';
import 'dotenv/config';

const octokit = new Octokit({
  auth: process.env['GITHUB_TOKEN'],
});
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

async function main() {
  console.log('Calling GPT-4...');

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4-0125-preview',
  });

  const modelResponse = chatCompletion.choices[0].message.content!;

  console.log('Adding PullRequest comment...');

  octokit.rest.issues.createComment({
    owner: 'psmyrdek',
    repo: 'rm-catalog',
    issue_number: 15,
    body: modelResponse,
  });
}

main();
