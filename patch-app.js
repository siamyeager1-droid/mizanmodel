const fs = require('fs');
let code = fs.readFileSync('artifacts/api-server/src/app.ts', 'utf8');

if (!code.includes('express.static')) {
  code = code.replace(
    'app.use("/api", router);',
    `app.use("/api", router);\n\nimport path from "node:path";\nconst distPath = path.join(__dirname, '../../learnease-mirpur/dist');\napp.use(express.static(distPath));\napp.get('*', (req, res) => { res.sendFile(path.join(distPath, 'index.html')); });\n`
  );
  fs.writeFileSync('artifacts/api-server/src/app.ts', code);
  console.log("Patched app.ts");
}
