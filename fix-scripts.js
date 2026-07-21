const fs = require('fs');
const glob = require('glob');

const packages = glob.sync('{artifacts/*,lib/*}/package.json');
packages.push('package.json');

for (const pkgFile of packages) {
  let changed = false;
  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf8'));
  
  if (pkg.scripts) {
    for (const [key, value] of Object.entries(pkg.scripts)) {
      if (value.includes('pnpm ')) {
        pkg.scripts[key] = value.replace(/pnpm/g, 'npm');
        changed = true;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2));
    console.log(`Updated scripts in ${pkgFile}`);
  }
}
