const fs = require('fs');

fs.readdirSync('.').forEach(file => {
    if (file.endsWith('.html')) {
        let content = fs.readFileSync(file, 'utf-8');
        let newContent = content.replace(/href="assets\/favicon\.png"/g, 'href="assets/g-favicon.png"');
        if (content !== newContent) {
            fs.writeFileSync(file, newContent, 'utf-8');
            console.log('Updated ' + file);
        }
    }
});
