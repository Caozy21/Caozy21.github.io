import assert from 'node:assert/strict';
import { prepareLearningMarkdown } from '../lib/learning-markdown.ts';

assert.equal(prepareLearningMarkdown('| Value | $|x|$ |'), '| Value | $\\vert x\\vert $ |');
assert.equal(prepareLearningMarkdown('| Value | $\\|x\\|$ |'), '| Value | $\\|x\\|$ |');
assert.equal(prepareLearningMarkdown('A formula $|x|$ outside a table.'), 'A formula $|x|$ outside a table.');
assert.equal(prepareLearningMarkdown('| `$x|y$` | $|z|$ |'), '| `$x|y$` | $\\vert z\\vert $ |');
for (const fence of ['```', '~~~~']) {
  const code = `${fence}md\n| Example | $|x|$ |\n${fence}`;
  assert.equal(prepareLearningMarkdown(code), code);
  assert.equal(prepareLearningMarkdown(`${code}\n| $|y|$ |`), `${code}\n| $\\vert y\\vert $ |`);
}
console.log('PASS: table math repair preserves prose, escaped pipes, and code examples.');
