const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const baseUrl = 'https://www.genixovate.com';

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Determine canonical URL
    let canonicalUrl = `${baseUrl}/${file}`;
    if (file === 'index.html') {
        canonicalUrl = `${baseUrl}/`;
    }

    const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;

    // Check if canonical already exists
    if (content.includes('rel="canonical"')) {
        // Replace existing
        content = content.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']+["']\s*\/?>/i, canonicalTag);
    } else {
        // Insert before </head>
        content = content.replace('</head>', `    ${canonicalTag}\n</head>`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added canonical tag to ${file} -> ${canonicalUrl}`);
});

console.log('Done.');
