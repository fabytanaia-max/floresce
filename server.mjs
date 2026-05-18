import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const root = process.cwd();
const appDir = path.join(root, 'standalone', 'baby-countdown');
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

function localIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) return net.address;
    }
  }
  return 'localhost';
}

const server = http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url || '/index.html';
  const cleanPath = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(appDir, cleanPath);

  if (!filePath.startsWith(appDir)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', contentTypes[ext] || 'application/octet-stream');
    res.end(data);
  });
});

server.listen(port, () => {
  const ip = localIp();
  console.log(`Baby Countdown running:`);
  console.log(`- Local:   http://localhost:${port}`);
  console.log(`- Android: http://${ip}:${port}`);
});
