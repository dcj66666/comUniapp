const { execSync } = require('child_process');
const ghpages = require('gh-pages');

// 构建文档
console.log('Building docs...');
execSync('npm run docs:build', { stdio: 'inherit' });

// 部署到 GitHub Pages
console.log('Deploying to GitHub Pages...');
ghpages.publish('.vuepress/dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/your-username/your-repo.git', // 替换为您的仓库地址
  message: 'docs: update documentation'
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  }
  console.log('Deploy success!');
}); 