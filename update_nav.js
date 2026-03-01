const fs = require('fs');
const path = require('path');

const directory = __dirname;
const htmlFiles = fs.readdirSync(directory).filter(file => file.endsWith('.html'));

function getStandardNav(filename) {
    const basename = path.basename(filename);

    const links = [
        { href: "index.html", text: "Home" },
        { href: "services.html", text: "Services" },
        { href: "pricing.html", text: "Pricing" },
        { href: "our-work.html", text: "Our Work" },
        { href: "how-we-build.html", text: "How We Build" },
        { href: "about.html", text: "About" }
    ];

    let navHtml = '            <ul class="nav-links">\n';
    for (const link of links) {
        if (link.href === basename) {
            navHtml += `                <li><a href="${link.href}" class="active">${link.text}</a></li>\n`;
        } else {
            navHtml += `                <li><a href="${link.href}">${link.text}</a></li>\n`;
        }
    }

    // Add the contact button
    navHtml += '                <li><a href="contact.html" class="btn btn-primary">Start a Project</a></li>\n            </ul>';
    return navHtml;
}

const footerServicesBlock = `                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="services.html">Brand Launch</a></li>
                        <li><a href="services.html">Brand Growth</a></li>
                        <li><a href="services.html">Brand Excellence</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                    </ul>
                </div>`;

for (const filename of htmlFiles) {
    if (filename === 'brand-systems.html') {
        continue; // We'll leave this one alone or delete it later
    }

    const filepath = path.join(directory, filename);
    let content = fs.readFileSync(filepath, 'utf-8');

    // Replace nav-links block
    const navPattern = / {12}<ul class="nav-links">[\s\S]*?<\/ul>/;
    const newNav = getStandardNav(filepath);
    content = content.replace(navPattern, newNav);

    // Replace footer brand systems block
    const brandSystemsFooterPattern = / {16}<div class="footer-col">\s*<h4>Brand Systems<\/h4>\s*<ul>[\s\S]*?<\/ul>\s*<\/div>/;
    content = content.replace(brandSystemsFooterPattern, footerServicesBlock);

    const servicesFooterPattern = / {16}<div class="footer-col">\s*<h4>Services<\/h4>\s*<ul>[\s\S]*?<\/ul>\s*<\/div>/;
    content = content.replace(servicesFooterPattern, footerServicesBlock);

    fs.writeFileSync(filepath, content, 'utf-8');
}

console.log("Updated navigation and footers in all HTML files using Node.js.");
