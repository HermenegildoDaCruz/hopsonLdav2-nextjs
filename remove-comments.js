const fs = require('fs');
const path = require('path');

function removeCommentsFromFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.js', '.jsx', '.ts', '.tsx', '.css'].includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  if (ext === '.css') {
    // Remove /* */ comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  } else {
    // JS/TS
    // First remove /* */
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    // Then remove //
    content = content.replace(/\/\/.*$/gm, '');
  }

  // Remove extra blank lines
  content = content.replace(/\n\s*\n/g, '\n');

  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !['node_modules', '.git', '.next'].includes(item)) {
      processDirectory(fullPath);
    } else if (stat.isFile()) {
      removeCommentsFromFile(fullPath);
    }
  }
}

processDirectory('.');
console.log('Comments removed from all files.');