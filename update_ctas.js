const fs = require('fs');
const glob = require('glob');

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

glob('*.html', (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        for (const [old, newStr] of Object.entries(replacements)) {
            // Replace generic CTA texts
            const regexes = [
                new RegExp(`>${old}<`, 'g'),
                new RegExp(`>${old} <`, 'g'),
                new RegExp(`>${old} &rarr;<`, 'g'),
                new RegExp(`"${old}"`, 'g'),
                new RegExp(`alt="${old}"`, 'g'),
                new RegExp(`title="${old}"`, 'g'),
            ];

            regexes.forEach(regex => {
                if (regex.source.includes('&rarr;')) {
                    content = content.replace(regex, `>${newStr} &rarr;<`);
                } else if (regex.source.includes('alt=')) {
                    content = content.replace(regex, `alt="${newStr}"`);
                } else if (regex.source.includes('title=')) {
                    content = content.replace(regex, `title="${newStr}"`);
                } else if (regex.source.includes('>')) {
                    if (regex.source.endsWith(' <')) {
                        content = content.replace(regex, `>${newStr} <`);
                    } else {
                        content = content.replace(regex, `>${newStr}<`);
                    }
                } else {
                    content = content.replace(regex, `"${newStr}"`);
                }
            });

            // Just specific exact matches for the generic ones
            content = content.replace(new RegExp(`\\b${old}\\b`, 'g'), newStr);
        }

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    });

    console.log("Done.");
});
