import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve('preview-v2');
const protectedAmounts = {
  'index.html': ['550 000 ₽', '20 000 ₽', '450 000 ₽', '300 000 ₽', '31 500 ₽', '85 000 ₽', '1 ₽'],
  'franchise.html': ['550 000 ₽', '20 000 ₽'],
  'own-brand.html': ['450 000 ₽', '450 000 ₽'],
  'documents.html': ['300 000 ₽', '300 000 ₽'],
};
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
assert.equal(crypto.createHash('sha256').update(app).digest('hex'),
  '55eb27d8217c41a7d1a5f9a26ffb8670d589bbdd8a3ac471f6219ed85518b59f',
  'Calculator/contact script needs separate owner scope');
const start = app.indexOf('function calculate(');
const end = app.indexOf('\nfunction renderCalculator', start);
assert.ok(start >= 0 && end > start);
const calculate = vm.runInNewContext(app.slice(start, end) + '\ncalculate', {}, { timeout: 1000 });
const result = calculate(30, 31500, 85000);
assert.equal(result.revenue, 945000);
assert.equal(result.totalExpenses, 812075);
assert.equal(result.operatingProfit, 132925);

for (const name of ['index.html', 'franchise.html', 'own-brand.html', 'documents.html']) {
  const html = fs.readFileSync(path.join(root, name), 'utf8');
  assert.deepEqual(html.match(/\d[\d\s\u00a0]*\s*₽/g) || [], protectedAmounts[name],
    `${name}: prices, royalty and displayed amounts require separate owner scope`);
  assert.equal((html.match(/<h1\b/gi) || []).length, 1, `${name}: exactly one h1`);
  assert.match(html, /name="robots"[^>]*content="[^"]*noindex/i, `${name}: keep preview noindex`);
  for (const match of html.matchAll(/\bsrc="(\.\/assets\/[^"?#]+)(?:[?#][^"]*)?"/g)) {
    const target = path.resolve(root, match[1]);
    assert.ok(target.startsWith(root + path.sep) && fs.statSync(target).isFile(), `${name}: local image exists`);
  }
  assert.ok(!html.includes('MAX_BOT_TOKEN') && !html.includes('BRIDGE_SUPPORT_TASK_TOKEN'));
}
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const calculatorStart = index.indexOf('<section class="section calc-section"');
assert.ok(calculatorStart >= 0, 'Preserve calculator section');
const calculatorEnd = index.indexOf('</section>', calculatorStart);
assert.ok(calculatorEnd > calculatorStart);
assert.equal(crypto.createHash('sha256').update(index.slice(calculatorStart, calculatorEnd + 10)).digest('hex'),
  'e0f58f84bb3ed04eacc323c64b810cef9ea213ae76e701c4f788b5c631cf644e',
  'Calculator markup, inputs, labels and displayed defaults require separate owner scope');
assert.equal((index.match(/class="format-card(?:\s|")/g) || []).length, 3);
for (const price of ['550 000 ₽', '450 000 ₽', '300 000 ₽']) assert.ok(index.includes(price));
assert.match(index, /id="calculator"/);
assert.match(index, /id="children"[^>]*min="10"[^>]*max="200"[^>]*value="30"/);
assert.match(index, /id="avg-check"[^>]*value="31500"/);
assert.match(index, /id="rent"[^>]*value="85000"/);
console.log('Preview pages, image paths, prices, noindex and calculator regression passed');
