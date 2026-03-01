const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const headingRegex = /(<h([1-6])\b[^>]*>)(.*?)(<\/h\2>)/gis;

let totalChanged = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Also patch local inline CSS blocks for footers
    content = content.replace(/\.footer-col h4/g, '.footer-col h4, .footer-col h3');

    // Extra safety, if there's any other h4-specific styling:
    content = content.replace(/\.phase-right h5/g, '.phase-right h5, .phase-right h4, .phase-right h3');

    let stack = [{ orig: 0, new: 0 }];
    let didChange = false;

    let newContent = content.replace(headingRegex, (match, openTag, origLevelStr, innerContent, closeTag) => {
        let orig = parseInt(origLevelStr);

        while (stack.length > 0 && stack[stack.length - 1].orig > orig) {
            stack.pop();
        }

        let newLevel;
        if (stack.length > 0 && stack[stack.length - 1].orig === orig) {
            newLevel = stack[stack.length - 1].new;
        } else {
            let top = stack[stack.length - 1];
            newLevel = top.new + 1;
            if (newLevel > 6) newLevel = 6;
            stack.push({ orig: orig, new: newLevel });
        }

        if (orig !== newLevel) {
            didChange = true;
        }

        let newOpenTag = openTag.replace(/^<h[1-6]/i, `<h${newLevel}`);
        let newCloseTag = `</h${newLevel}>`;

        return newOpenTag + innerContent + newCloseTag;
    });

    if (didChange || content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        totalChanged++;
    }
});

console.log(`Refactored headings in ${totalChanged} HTML files.`);

// Now fix style.css
const cssPath = path.join(dir, 'style.css');
if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    cssContent = cssContent.replace(/\.footer-col h4/g, '.footer-col h4, .footer-col h3');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log('Updated style.css selectors.');
}

