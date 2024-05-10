
const fs = require('fs');

fs.copyFileSync('docs/index.html', 'docs/404.html');
fs.writeFileSync('docs/CNAME', 'read-cat.top', { encoding: 'utf-8' });