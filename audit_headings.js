const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gis;

files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    console.log(`\n--- ${file} ---`);
    let h1Count = 0;
    const matches = [...content.matchAll(headingRegex)];

    matches.forEach(match => {
        const level = parseInt(match[1]);
        if (level === 1) h1Count++;
        const text = match[2].replace(/<[^>]+>/g, '').trim().substring(0, 60).replace(/\n/g, ' ');
        const indent = "  ".repeat(level - 1);
        console.log(`${indent}<h${level}> ${text}`);
    });

    console.log(`Total H1s: ${h1Count}`);
    if (h1Count !== 1) {
        console.log(`  => WARNING: Page should have exactly one H1.`);
    }
});
