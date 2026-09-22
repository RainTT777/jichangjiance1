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

console.log('Syncing dist output strictly within 机场博客 project...');
if (fs.existsSync('reviews')) {
  fs.rmSync('reviews', { recursive: true, force: true });
}
if (fs.existsSync('dist')) {
  // 1. Copy dist contents to root directory of 机场博客
  fs.readdirSync('dist').forEach((item) => {
    const srcPath = path.join('dist', item);
    const destPath = path.join('.', item);
    copyRecursiveSync(srcPath, destPath);
  });

  // 2. Ensure all logo PNG files exist in subdirectories within 机场博客 for robust image loading
  const logoFiles = [
    'edgenova_logo.png', 'sujie_logo.png', 'kexinyun_logo.png',
    'kuaili_logo.png', 'yuntu_logo.png', 'jisuyun_logo.png', 'jisu_logo.png',
    'shunyun_logo.png', 'jilianyun_logo.png', 'guangnianti_logo.png',
    'hero_tech_illust_core.png', 'hero_illust_core.png', 'ghibli_forest_core.png',
    'hero_forest_core.png', 'hero_tech_core.png'
  ];

  const subDirs = [
    'topics', 'tag', 'category', 'brands', 'go', 'blog', 'downloads', 'knowledge', 'apple-id', 'free-nodes', 'about', 'compare'
  ];

  logoFiles.forEach(file => {
    const srcFile = fs.existsSync(path.join('public', file)) ? path.join('public', file) : fs.existsSync(file) ? file : null;
    if (srcFile && fs.existsSync(srcFile)) {
      subDirs.forEach(sub => {
        if (!fs.existsSync(sub)) {
          fs.mkdirSync(sub, { recursive: true });
        }
        const target = path.join(sub, file);
        fs.copyFileSync(srcFile, target);
      });
    }
  });

  console.log('Build sync completed successfully.');
}
