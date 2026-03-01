const fs = require('fs');
const path = require('path');

const dir = __dirname;
const styleFile = path.join(dir, 'style.css');

// 1. UPDATE style.css
let styleContent = fs.readFileSync(styleFile, 'utf-8');

// Replace .hero block safely
styleContent = styleContent.replace(
    /\.hero\s*\{[^}]*?height:[^}]*?\}/,
    `.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 160px;
    padding-bottom: 80px;
    overflow: hidden;
}`
);

// Add margin: auto to .hero-content
if (styleContent.includes('.hero-content {')) {
    styleContent = styleContent.replace(
        /\.hero-content\s*\{[^}]*?z-index:\s*10;\s*\}/,
        `.hero-content {
    position: relative;
    width: 100%;
    z-index: 10;
    margin-top: auto;
    margin-bottom: auto;
}`
    );
}

fs.writeFileSync(styleFile, styleContent, 'utf-8');
console.log('style.css updated.');

// 2. Process all HTML files
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let htmlPath = path.join(dir, file);
    let html = fs.readFileSync(htmlPath, 'utf-8');
    let original = html;

    // Remove align-items: center; from inline style attribute
    html = html.replace(/<header class="hero" style="min-height:[^"]*?align-items:center;?"\s*>/g, '<header class="hero">');
    html = html.replace(/<header class="hero" style="min-height:[^"]*?align-items:\s*center;?"\s*>/g, '<header class="hero">');
    html = html.replace(/style="min-height:[^"]*?vh;align-items:center;"/g, '');

    // Specifically for index.html inline style
    if (file === 'index.html') {
        html = html.replace(/\.hero\s*\{\s*align-items:\s*center;\s*padding-bottom:\s*0;\s*min-height:\s*100vh;\s*\}/g, '');
    }

    // Specifically for services.html inline style
    if (file === 'services.html') {
        html = html.replace(/\.hero\s*\{\s*align-items:\s*center;\s*\}/g, '');
    }

    if (original !== html) {
        fs.writeFileSync(htmlPath, html, 'utf-8');
        console.log(`Updated ${file}`);
    }
});
