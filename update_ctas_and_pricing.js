const fs = require('fs');
const path = require('path');

const directory = __dirname;
const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));

const calendlyLink = 'https://calendly.com/mishitamaggo23/30min';

for (const filename of htmlFiles) {
    const filepath = path.join(directory, filename);
    let content = fs.readFileSync(filepath, 'utf-8');
    let hasChanges = false;

    // Fix Pricing in contact.html
    if (filename === 'contact.html') {
        const c1 = content;
        content = content.replace(/<span class="path-investment">,000<\/span>/g, '<span class="path-investment">$28,000</span>');
        content = content.replace(/<span class="path-investment">₹75,000nth<\/span>/g, '<span class="path-investment">$4,500–$6,500/mo</span>');
        content = content.replace(/<span class="path-investment">₹8,000–₹30,000nth<\/span>/g, '<span class="path-investment">$1,000–$3,500/mo</span>');
        content = content.replace(/New Brand Launch — ,000/g, 'New Brand Launch — $28,000');
        content = content.replace(/Growth Infrastructure — ₹75,000nth/g, 'Growth Infrastructure — $4,500–$6,500/mo');
        content = content.replace(/Specific Systems — ₹8K–30K\/month/g, 'Specific Systems — $1,000–$3,500/mo');

        // Fix form action
        content = content.replace(/action="#" method="POST"/g, 'action="mailto:mishitamaggo23@gmail.com" method="POST" enctype="text/plain"');

        if (c1 !== content) hasChanges = true;
    }

    // Fix Pricing in pricing.html
    if (filename === 'pricing.html') {
        const c1 = content;
        content = content.replace(/starting from\s*₹8,000nth/g, 'starting from $1,000/mo');
        if (c1 !== content) hasChanges = true;
    }

    // Replace Book/Schedule CTA Links
    const regex = /<a [^>]*href="[^"]*"[^>]*>\s*(Book a Discovery Call(?: &rarr;)?|Book Discovery Call|Schedule Strategy Session|Start Your Brand|Build Growth Systems|Partner with Us)\s*<\/a>/gi;

    content = content.replace(regex, (match) => {
        if (match.includes('href="' + calendlyLink + '"')) return match; // Already updated

        // Replace ONLY the href but preserve classes and other attributes
        const replacedHref = match.replace(/href="[^"]*"/, `href="${calendlyLink}"`);
        hasChanges = true;
        return replacedHref;
    });

    if (hasChanges) {
        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`Updated ${filename}`);
    }
}
console.log('Update script finished.');
