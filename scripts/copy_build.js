import fs from 'fs';
import path from 'path';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else if (exists) {
    fs.copyFileSync(src, dest);
  }
}

console.log('Syncing dist output to root and public...');
if (fs.existsSync('dist')) {
  // Copy dist contents to root directory
  fs.readdirSync('dist').forEach((item) => {
    const srcPath = path.join('dist', item);
    const destPath = path.join('.', item);
    copyRecursiveSync(srcPath, destPath);
    
    // Also copy to public directory for static assets and endpoints
    const publicDestPath = path.join('public', item);
    copyRecursiveSync(srcPath, publicDestPath);
  });
  console.log('Build sync completed successfully.');
}
