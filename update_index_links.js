const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace all relative index.html links with root /
    content = content.replace(/href="index\.html"/g, 'href="/"');

    // Also replace absolute URLs pointing to index.html if they exist in HTML
    content = content.replace(/href="https:\/\/www\.genixovate\.com\/index\.html"/g, 'href="https://www.genixovate.com/"');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
console.log('Done.');
