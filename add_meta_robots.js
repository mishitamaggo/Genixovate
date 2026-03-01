const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const metaRobotsSnippet = '\n    <meta name="robots" content="index, follow" />';

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if the tag already exists to avoid duplication
    if (!content.includes('name="robots"')) {
        // Insert after the <head> opening tag, or immediately after charset if present
        if (content.includes('<meta charset="UTF-8">')) {
            content = content.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">' + metaRobotsSnippet);
        } else {
            content = content.replace(/<head>/i, '<head>' + metaRobotsSnippet);
        }
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
    }
});

console.log(`Successfully added meta robots tag to ${updatedCount} HTML files.`);
