import OpenAI from 'openai';

export async function conductCodeReview(apiKey: string, diff: string) {
  const openai = new OpenAI({
    apiKey,
  });

  const prompt = `
    Conduct Code Review of the following git diff enclosed with <GIT_DIFF></<GIT_DIFF> tags.

    Follow these rules:
    1. Do not comment on configuration files.
    2. Do not comment on YML files.
    3. Do not comment on the third-party library code.
    4. When suggesting code improvements, use Markdown.
    5. Adjust the volume of comments based on the size of the diff.

    <GIT_DIFF>
    ${diff}
    </GIT_DIFF>
  `;

  console.log('Calling GPT-4...');

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-4-0125-preview',
  });

  return chatCompletion.choices[0].message.content!;
}
