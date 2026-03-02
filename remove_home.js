const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Check for the Home link and remove it
    // The structure is typically: <li><a href="index.html">Home</a></li>
    // Or: <li><a href="index.html" class="active">Home</a></li>
    // Using a regex to catch both and surrounding spaces/newlines if any

    // This regex looks for <li> tags that contain an <a> tag pointing to index.html with the text Home
    const regex = /<li\s*>\s*<a\s+href="index\.html"[^>]*>Home<\/a>\s*<\/li>\s*/gi;

    // Also catch cases where there might not be a wrapping <li> tag, though there usually is in this nav
    const regexNoLi = /<a\s+href="index\.html"[^>]*>Home<\/a>\s*/gi;

    content = content.replace(regex, '');

    // Just in case it's structured differently without <li>
    if (content === originalContent) {
        // Look specifically inside nav-links
        content = content.replace(regexNoLi, '');
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Removed Home link from ${file}`);
    }
});

console.log('Done.');
