const fs = require('fs');
const path = require('path');
const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const footerMarkup = `    <!-- FOOTER -->
    <footer class="footer-new">
        <div class="container">
            <div class="footer-new-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; max-width: 1000px;">
                <div class="footer-brand">
                    <img src="assets/logo.png" alt="Genixovate Logo" class="logo" style="height: 80px; width: auto; margin-bottom: 20px; display: block; filter: invert(1); mix-blend-mode: screen; margin-left: -20px;">
                    <p style="color: rgba(255,255,255,0.6); line-height: 1.6;">Building brand infrastructure<br>for modern fashion.</p>
                </div>
                <div class="footer-col" style="margin-left: auto;">
                    <h4 style="color: rgba(255,255,255,0.3); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">Company</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="tel:+919871543232">9871543232</a></li>
                    </ul>
                </div>
                <div class="footer-col" style="margin-left: auto;">
                    <h4 style="color: rgba(255,255,255,0.3); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">Explore</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li><a href="services.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="agents.html">Agents</a></li>
                        <li><a href="blogs.html">Blogs</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom" style="margin-top: 60px;">
                <p>&copy; 2026 Genixovate. Built for fashion founders who value systems as much as creativity.</p>
            </div>
        </div>
    </footer>`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8');
    let original = content;

    const footerRegex = /<!-- FOOTER -->[\s\S]*?<\/footer>/;
    const bodyEndRegex = /<\/body>/;

    // Replace existing footer if it exists
    if (footerRegex.test(content)) {
        content = content.replace(footerRegex, footerMarkup);
    } else {
        // Append before </body> if no footer exists (for the newly created pages)
        content = content.replace(bodyEndRegex, footerMarkup + '\n</body>');
    }

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content, 'utf-8');
        console.log('Updated footer in', file);
    }
});
