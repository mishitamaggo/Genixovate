const fs = require('fs');
const path = require('path');

const replacements = {
    'Start a Project': 'Start Conversation',
    'Send Message': 'Start Conversation',
    'Book a Discovery Call': 'Start Conversation',
    'Book Discovery Call': 'Start Conversation',
    'Schedule Strategy Session': 'Start Conversation',
    'Describe Your Needs': 'Start Conversation',
    'Start Your Brand': 'Start Conversation',
    'Build Growth Systems': 'Start Conversation',
    'Inquire for Scaling': 'Start Conversation',
    'Start Now': 'Start Conversation',
};

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    for (const [old, newStr] of Object.entries(replacements)) {
        content = content.split(old).join(newStr);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log("Done.");
