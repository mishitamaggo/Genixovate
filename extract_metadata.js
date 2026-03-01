const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const titleRegex = /<title>(.*?)<\/title>/is;
const descRegex = /<meta\s+name="description"\s+content="(.*?)"\s*\/?>/is;

let metadata = {};

files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const titleMatch = content.match(titleRegex);
    const descMatch = content.match(descRegex);

    metadata[file] = {
        title: titleMatch ? titleMatch[1].trim() : '',
        description: descMatch ? descMatch[1].trim() : ''
    };
});

console.log(JSON.stringify(metadata, null, 2));
