const fs = require('fs');
const path = require('path');

const dir = './';

const navbarLogoRegex = /<a\s+href="index\.html"\s+class="logo">Genixovate\.<\/a>/g;
const navbarLogoNew = '<a href="index.html" class="logo" style="display: flex; align-items: center; text-decoration: none;"><img src="assets/logo.png" alt="Genixovate" style="height: 36px; width: auto;"></a>';

const footerLogoRegex = /<span\s+class="logo"[^>]*>Genixovate\.<\/span>/g;
const footerLogoNew = '<img src="assets/logo.png" alt="Genixovate Logo" class="logo" style="height: 48px; width: auto; margin-bottom: 20px; display: block; filter: brightness(0) invert(1);">';

const files = fs.readdirSync(dir);
const htmlFiles = files.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    content = content.replace(navbarLogoRegex, navbarLogoNew);
    content = content.replace(footerLogoRegex, footerLogoNew);

    if (!content.includes('rel="icon"')) {
        content = content.replace('</head>', '    <link rel="icon" type="image/png" href="assets/favicon.png">\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log(`Updated ${htmlFiles.length} HTML files.`);

const jsFiles = ['update_footers.js', 'fix_how_we_build.js', 'server.js', 'update_nav.js', 'apply_seo.js', 'apply_seo_v2.js'];

jsFiles.forEach(file => {
    if (fs.existsSync(path.join(dir, file))) {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');
        content = content.replace(navbarLogoRegex, navbarLogoNew);
        content = content.replace(footerLogoRegex, footerLogoNew);
        fs.writeFileSync(path.join(dir, file), content, 'utf8');
    }
});
console.log(`Updated JS files.`);
