import OpenAI from 'openai';
import { createReadStream } from 'fs';

const openai = new OpenAI();

const OPENAI_MODEL_VERSION = 'gpt-3.5-turbo-0125';
const VECTOR_STORE_ID = 'vs_xrhtu8INHU7jogg3vF1Uuvgs';

export async function generateDocumentation(filePath: string, fileContent: string) {
  const prompt = `
    I need to generate simple and concise documentation for the following file enclosed with <FILE_CONTENT></FILE_CONTENT> tags.

    The file is available under the path: ${filePath}

    Use markdown. Describe the purpose of the file, its structure, and the main functions.

    <FILE_CONTENT>
    ${fileContent}
    </FILE_CONTENT>

    Include file content within the answer, enclosed with markdown with the appropriate syntax highlighting.
  `;

  console.log('Calling OpenAI API...');

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: OPENAI_MODEL_VERSION,
  });

  return chatCompletion.choices[0].message.content!;
}

export async function uploadToStore(filePaths: string[]) {
  const fileStreams = filePaths.map((path) => createReadStream(path));

  console.log(`Uploading ${filePaths.length} files to the vector store...`);

  await openai.beta.vectorStores.fileBatches.uploadAndPoll(VECTOR_STORE_ID, { files: fileStreams });
}

// export async function conductCodeReview(apiKey: string, diff: string) {
//   const openaiClient = new OpenAI({
//     apiKey,
//   });

//   const prompt = `
//     Conduct Code Review of the following git diff enclosed with <GIT_DIFF></<GIT_DIFF> tags.

//     Follow these rules:
//     1. Do not comment on configuration files.
//     2. Do not comment on YML files.
//     3. Do not comment on the third-party library code.
//     4. When suggesting code improvements, use Markdown.
//     5. Adjust the volume of comments based on the size of the diff.

//     <GIT_DIFF>
//     ${diff}
//     </GIT_DIFF>
//   `;

//   console.log('Calling GPT-4...');

//   const chatCompletion = await openaiClient.chat.completions.create({
//     messages: [{ role: 'user', content: prompt }],
//     model: OPENAI_MODEL_VERSION,
//   });

//   return chatCompletion.choices[0].message.content!;
// }
