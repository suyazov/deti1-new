import puppeteer from 'puppeteer';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

const routes = [
  { path: '/', file: 'index.html', waitFor: 'h1' },
  { path: '/privacy-policy', file: 'privacy-policy.html', waitFor: 'h1' },
  { path: '/consent', file: 'consent.html', waitFor: 'h1' },
];

const PORT = 4173;

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
      cwd: __dirname,
      stdio: 'pipe',
      detached: true,
    });

    let resolved = false;
    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        console.log('Preview server start timeout reached, proceeding anyway');
        resolve(server);
      }
    }, 10000);

    server.stdout.on('data', (data) => {
      const str = data.toString();
      console.log('[preview]', str.trim());
      if (!resolved && /Local:|http:\/\/localhost/.test(str)) {
        resolved = true;
        clearTimeout(timeout);
        resolve(server);
      }
    });

    server.stderr.on('data', (data) => {
      console.error('[preview]', data.toString().trim());
    });

    server.on('error', (err) => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        reject(err);
      }
    });

    server.on('exit', (code) => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        reject(new Error(`Preview server exited with code ${code}`));
      }
    });
  });
}

async function prerender() {
  if (!fs.existsSync(distDir)) {
    throw new Error(`dist directory not found at ${distDir}. Run "npm run build" first.`);
  }

  const server = await startPreviewServer();
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    for (const route of routes) {
      console.log(`Prerendering ${route.path}...`);
      const page = await browser.newPage();
      const response = await page.goto(`http://localhost:${PORT}${route.path}`, {
        waitUntil: 'load',
        timeout: 30000,
      });

      if (!response || !response.ok()) {
        console.warn(`Warning: ${route.path} returned status ${response?.status()}`);
      }

      try {
        await page.waitForSelector(route.waitFor, { timeout: 10000 });
      } catch (err) {
        console.warn(`Warning: selector ${route.waitFor} not found on ${route.path}: ${err.message}`);
      }

      const html = await page.content();
      const filePath = path.join(distDir, route.file);
      fs.writeFileSync(filePath, html);
      console.log(`Wrote ${filePath} (${html.length} bytes)`);
      await page.close();
    }
  } finally {
    await browser?.close();
    if (server && !server.killed) {
      try {
        process.kill(-server.pid, 'SIGKILL');
      } catch {
        server.kill('SIGKILL');
      }
    }
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
