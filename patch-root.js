const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts.dev = "npm run build -w @workspace/learnease-mirpur && npm run dev -w @workspace/api-server";
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
