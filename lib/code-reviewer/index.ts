import OpenAI from 'openai';
import { Octokit } from '@octokit/rest';
import 'dotenv/config';
import { readFileSync } from 'fs';

const [repoOwner, repoName] = process.env['GITHUB_REPO_NAME_OWNER']!.split('/');

const config = {
  openApiKey: process.env['OPENAI_API_KEY'],
  githubKey: process.env['GITHUB_TOKEN'],
  repoOwner: repoOwner,
  repoName: repoName,
  issueNo: parseInt(process.env['ISSUE_NUMBER'] as string),
};

const octokit = new Octokit({
  auth: config.githubKey,
});
const openai = new OpenAI({
  apiKey: config.openApiKey,
});

async function main() {
  console.log('Calling GPT-4...');

  const diffContent = readFileSync('./diff.txt', 'utf-8');

  const prompt = `
    Conduct Code Review of the following fragment enclosed with GIT_DIFF tags:

    <GIT_DIFF>
    ${diffContent}
    </GIT_DIFF>
  `;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4-0125-preview',
  });

  const modelResponse = chatCompletion.choices[0].message.content!;

  console.log('Adding PullRequest comment...');

  octokit.rest.issues.createComment({
    owner: config.repoOwner,
    repo: config.repoName,
    issue_number: config.issueNo,
    body: modelResponse,
  });
}

main();
