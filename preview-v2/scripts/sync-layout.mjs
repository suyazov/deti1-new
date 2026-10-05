import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const templates = Object.fromEntries(['header', 'footer'].map(name => [
  name, readFileSync(new URL(`partials/${name}.html`, root), 'utf8').trimEnd(),
]));
const pages = { 'index.html': '', 'franchise.html': 'franchise',
  'own-brand.html': 'own-brand', 'documents.html': 'documents' };
const check = process.argv.includes('--check');
let stale = false;
for (const [name, interest] of Object.entries(pages)) {
  const url = new URL(name, root);
  const before = readFileSync(url, 'utf8');
  const tokens = {
    brandHref: interest ? './' : '#top',
    homePrefix: interest ? './' : '',
    contactHref: interest ? `./?interest=${interest}#contact` : '#contact',
    activeFormats: interest ? ' aria-current="true"' : '',
  };
  let after = before;
  for (const [part, template] of Object.entries(templates)) {
    const start = `<!-- shared:${part}:start -->`;
    const end = `<!-- shared:${part}:end -->`;
    const first = after.indexOf(start), last = after.indexOf(end);
    if (first < 0 || last < first || after.indexOf(start, first + 1) >= 0) {
      throw new Error(`Missing or duplicate ${part} markers in ${name}`);
    }
    const rendered = template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      if (!Object.hasOwn(tokens, key)) throw new Error(`Unknown token: ${key}`);
      return tokens[key];
    });
    after = after.slice(0, first) + start + '\n' + rendered + '\n' + after.slice(last);
  }
  if (after !== before) {
    if (check) { console.error(`Outdated shared layout: ${name}`); stale = true; }
    else writeFileSync(url, after);
  }
}
if (stale) process.exitCode = 1;
else console.log(check ? 'Shared header/footer are up to date.' : 'Shared header/footer synchronized.');
