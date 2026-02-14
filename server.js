const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || 4173);
const root = __dirname;

const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

http
    .createServer((req, res) => {
        const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
        let filePath = path.join(root, requestPath === '/' ? 'index.html' : requestPath);

        if (!filePath.startsWith(root)) {
            res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Forbidden');
            return;
        }

        fs.stat(filePath, (err, stats) => {
            if (!err && stats.isDirectory()) {
                filePath = path.join(filePath, 'index.html');
            }

            fs.readFile(filePath, (readErr, data) => {
                if (readErr) {
                    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end('Not found');
                    return;
                }

                const ext = path.extname(filePath).toLowerCase();
                res.writeHead(200, {
                    'Content-Type': contentTypes[ext] || 'application/octet-stream',
                    'Cache-Control': 'no-cache'
                });
                res.end(data);
            });
        });
    })
    .listen(port, '0.0.0.0', () => {
        console.log(`Preview server running on http://0.0.0.0:${port}`);
    });
