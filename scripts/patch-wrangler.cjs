const fs = require('fs');
const path = require('path');

const binPath = path.resolve(__dirname, '../node_modules/.bin/wrangler');

const wrapperContent = `#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

const targetDir = path.resolve(__dirname, '../../artifacts/learnease-mirpur');
const args = process.argv.slice(2);

// Find real wrangler.js inside node_modules/wrangler/bin
const wranglerBin = path.resolve(__dirname, '../../node_modules/wrangler/bin/wrangler.js');

console.log('[Wrangler Wrapper] Redirecting wrangler command to ' + targetDir);
console.log('[Wrangler Wrapper] Running real wrangler with args: ' + args.join(' '));

const result = spawnSync('node', [wranglerBin, ...args], {
  cwd: targetDir,
  stdio: 'inherit'
});

process.exit(result.status ?? 0);
`;

try {
  if (fs.existsSync(binPath)) {
    // Delete existing symlink or file
    try {
      fs.unlinkSync(binPath);
    } catch (e) {
      // If it is a directory or something else, try deleting
      fs.rmSync(binPath, { force: true, recursive: true });
    }
  }
  
  // Write the wrapper script
  fs.writeFileSync(binPath, wrapperContent, { mode: 0o755 });
  console.log('Successfully patched wrangler binary to run in subproject directory.');
} catch (err) {
  console.error('Failed to patch wrangler binary:', err);
}
