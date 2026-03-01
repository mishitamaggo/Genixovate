const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let newContent = content.replace(/<li><a href="our-work\.html">Our Work<\/a><\/li>\s*/g, '');

    if (content !== newContent) {
        fs.writeFileSync(f, newContent, 'utf8');
        console.log('Removed Our Work link from', f);
    }
});
