const fs = require('fs');
const path = require('path');

const dir = './';

// Need to match exactly what we put in the previous phase
const oldNavbarLogoStr1 = '<a href="index.html" class="logo" style="display: flex; align-items: center; text-decoration: none;"><img src="assets/logo.png" alt="Genixovate" style="height: 36px; width: auto;"></a>';
const oldNavbarLogoStr2 = '<a href="index.html" class="logo"><img src="assets/logo.png" alt="Genixovate" style="height: 48px; width: auto; max-width: 100%;"></a>';
const newNavbarLogo = '<a href="index.html" class="logo" style="display: flex; align-items: center; text-decoration: none;"><img src="assets/logo.png" alt="Genixovate" style="height: 64px; width: auto; mix-blend-mode: multiply; margin-left: -15px;"></a>';

const oldFooterLogoStr = '<img src="assets/logo.png" alt="Genixovate Logo" class="logo" style="height: 48px; width: auto; margin-bottom: 20px; display: block; filter: brightness(0) invert(1);">';
const newFooterLogo = '<img src="assets/logo.png" alt="Genixovate Logo" class="logo" style="height: 80px; width: auto; margin-bottom: 20px; display: block; filter: invert(1); mix-blend-mode: screen; margin-left: -20px;">';

const files = fs.readdirSync(dir);
const htmlFiles = files.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    content = content.split(oldNavbarLogoStr1).join(newNavbarLogo);
    content = content.split(oldNavbarLogoStr2).join(newNavbarLogo);
    content = content.split(oldFooterLogoStr).join(newFooterLogo);

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log(`Updated ${htmlFiles.length} HTML files.`);

const jsFiles = ['update_footers.js', 'fix_how_we_build.js', 'server.js', 'update_nav.js', 'apply_seo.js', 'apply_seo_v2.js'];

jsFiles.forEach(file => {
    if (fs.existsSync(path.join(dir, file))) {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');
        content = content.split(oldNavbarLogoStr1).join(newNavbarLogo);
        content = content.split(oldNavbarLogoStr2).join(newNavbarLogo);
        content = content.split(oldFooterLogoStr).join(newFooterLogo);
        fs.writeFileSync(path.join(dir, file), content, 'utf8');
    }
});

console.log(`Updated JS files.`);
