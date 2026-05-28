const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DEFAULT = 'smartMOOV-overview.html';

http.createServer((req, res) => {
  // Strip query string and sanitize path
  let urlPath = req.url.split('?')[0].replace(/\.\./g, '');
  if (urlPath === '/' || urlPath === '') urlPath = '/' + DEFAULT;

  const file = path.join(ROOT, urlPath);

  fs.readFile(file, (err, data) => {
    if (err) {
      // Fallback: serve overview
      fs.readFile(path.join(ROOT, DEFAULT), (e2, d2) => {
        if (e2) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(d2);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(3456, () => {
  console.log('smartMOOV server running on http://localhost:3456');
  console.log('  Overview : http://localhost:3456/');
  console.log('  Roadmap  : http://localhost:3456/smartMOOV-roadmap.html');
});
