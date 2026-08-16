import fs from 'node:fs';
import path from 'node:path';

function processDirectory(dir, rootDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath, rootDir);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Calculate relative prefix from this html file to root dist folder
      const relativeDir = path.relative(path.dirname(fullPath), rootDir);
      const prefix = relativeDir ? relativeDir.replace(/\\/g, '/') + '/' : './';
      
      // Replace /_astro/ with relative path prefix + _astro/
      content = content.replace(/(href|src)="\/_astro\//g, `$1="${prefix}_astro/`);
      content = content.replace(/(href|src)="\/.\/_astro\//g, `$1="${prefix}_astro/`);
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  console.log('Fixing relative asset paths in dist/*.html...');
  processDirectory(distDir, distDir);
  console.log('Done fixing relative asset paths!');
}
