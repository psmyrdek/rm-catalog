import { handler } from './dist/index.js';

const result = await handler({
  url: 'https://d1hhcbyox0skqu.cloudfront.net',
  selector: 'id="app"',
});

console.log(result);
