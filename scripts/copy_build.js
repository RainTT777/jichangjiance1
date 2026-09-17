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

console.log('Syncing dist output to root, public, and Desktop/博客...');
if (fs.existsSync('dist')) {
  // 1. Copy dist contents to root directory
  fs.readdirSync('dist').forEach((item) => {
    const srcPath = path.join('dist', item);
    const destPath = path.join('.', item);
    copyRecursiveSync(srcPath, destPath);
    
    // 2. Copy to public directory
    const publicDestPath = path.join('public', item);
    copyRecursiveSync(srcPath, publicDestPath);
  });

  // 3. Also sync to Desktop/博客 if present
  const desktopBlog = 'C:/Users/Administrator/Desktop/博客';
  if (fs.existsSync(desktopBlog)) {
    fs.readdirSync('dist').forEach((item) => {
      const srcPath = path.join('dist', item);
      const destPath = path.join(desktopBlog, item);
      copyRecursiveSync(srcPath, destPath);
    });
  }

  // 4. Ensure all logo PNG files exist in subdirectories for robust image loading
  const logoFiles = [
    'edgenova_logo.png', 'sujie_logo.png', 'kexinyun_logo.png',
    'kuaili_logo.png', 'yuntu_logo.png', 'jisuyun_logo.png',
    'shunyun_logo.png', 'jilianyun_logo.png', 'guangnianti_logo.png',
    'hero_tech_illust_core.png'
  ];

  const subDirs = [
    'reviews', 'public/reviews', 'dist/reviews',
    'topics', 'public/topics', 'dist/topics',
    'tag', 'public/tag', 'dist/tag',
    'category', 'public/category', 'dist/category',
    'brands', 'public/brands', 'dist/brands',
    'go', 'public/go', 'dist/go'
  ];

  if (fs.existsSync(desktopBlog)) {
    subDirs.push(
      'C:/Users/Administrator/Desktop/博客/reviews',
      'C:/Users/Administrator/Desktop/博客/topics',
      'C:/Users/Administrator/Desktop/博客/tag',
      'C:/Users/Administrator/Desktop/博客/category',
      'C:/Users/Administrator/Desktop/博客/brands',
      'C:/Users/Administrator/Desktop/博客/go'
    );
  }

  logoFiles.forEach(file => {
    const srcFile = path.join('public', file);
    if (fs.existsSync(srcFile)) {
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
