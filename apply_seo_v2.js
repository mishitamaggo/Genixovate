const fs = require('fs');
const path = require('path');

const dir = __dirname;

function updateFile(filename, replacements) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) {
        console.error(`File ${filename} not found.`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalLength = content.length;

    for (const [regex, replace] of replacements) {
        if (regex.test(content)) {
            content = content.replace(regex, replace);
        } else {
            console.warn(`[!] Regex not found in ${filename}: ${regex}`);
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filename} (Length: ${originalLength} -> ${content.length})`);
}

// 1. INDEX.HTML
const indexReplacements = [];

// Reconstructing broken hero + value + pillars section
const brokenIndexMatch = /<!-- HERO -->\s*<section class="hero">\s*<!-- PHILOSOPHY -->/;

const recoveredIndexContent = `<!-- HERO -->
    <section class="hero">
        <div class="hero-video-wrapper">
            <img src="assets/hero_bg_1772274963937.png" class="hero-bg" alt="Fashion Brand Systems">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content fade-up-element">
            <h1 class="hero-title">Tailoring the Future of Fashion with<br>AI & Digital Mastery</h1>
            <p class="hero-subtitle"><strong>AI-Powered Fashion Tech Meets Elite Digital Marketing for DTC Brands.</strong> Genixovate drives scalable growth for emerging designers and fashion houses.<br><br>Future-proof your fashion brand with integrated solutions: visionary brand building, precision digital marketing for fashion, and bespoke AI automation—from intelligent agents to automated tech packs. Scale faster, reduce bottlenecks, and dominate digitally in the competitive DTC fashion landscape.</p>
            <div class="hero-cta">
                <a href="contact.html" class="btn btn-primary btn-large">Book a Discovery Call &rarr;</a>
                <a href="services.html" class="btn btn-secondary btn-large">Explore Fashion Growth Packages</a>
            </div>
        </div>
    </section>

    <!-- VALUE PROPS -->
    <div class="value-props fade-up-element">
        <span>AI Fashion Marketing</span>
        <span class="vp-sep">|</span>
        <span>DTC Digital Dominance</span>
        <span class="vp-sep">|</span>
        <span>Automated Tech Packs</span>
    </div>

    <!-- WHAT WE BUILD -->
    <section class="section relative-z" style="background:#faf9f7;">
        <div class="container fade-up-element">
            <div class="section-header">
                <span class="section-kicker">The New Reality for Fashion Brands</span>
                <h2 class="section-title">Eliminating Bottlenecks<br>& Digital Noise</h2>
                <p class="section-desc">In a world of AI-driven search, fleeting trends, and high ad costs, creative excellence alone isn't enough. Genixovate delivers cultural relevance, revenue velocity, and operational efficiency through AI in fashion marketing and full-funnel strategies.</p>
            </div>

            <div class="pillars-grid">
                <div class="pillar fade-up-element">
                    <span class="pillar-kicker">Brand Architecture & Incubation</span>
                    <h3>Build enduring fashion identities</h3>
                    <p>Strategic positioning and narratives that position your label as a cultural force.</p>
                    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:15px;">We develop:</p>
                    <ul class="pillar-list">
                        <li>Visual storytelling &amp; DNA</li>
                        <li>SEO-driven brand architecture</li>
                        <li>Cultural narrative development</li>
                        <li>Lookbooks &amp; visual ecosystems</li>
                        <li>Full DTC fashion incubation</li>
                    </ul>
                    <p class="pillar-tagline">A brand without strategy is just aesthetics. We build both.</p>
                </div>

                <div class="pillar fade-up-element">
                    <span class="pillar-kicker">Digital Dominance</span>
                    <h3>Achieve visibility and loyalty</h3>
                    <p>Multi-channel paid media and organic growth turning audiences into high-value customers.</p>
                    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:15px;">We deliver:</p>
                    <ul class="pillar-list">
                        <li>Meta, TikTok &amp; Google Ads</li>
                        <li>SEO &amp; organic growth for fashion</li>
                        <li>Trendjacking fashion campaigns</li>
                        <li>Conversion rate optimization</li>
                        <li>Attribution modeling for DTC</li>
                    </ul>
                    <p class="pillar-tagline">Precision digital marketing for fashion brands ready to scale.</p>
                </div>

                <div class="pillar fade-up-element">
                    <span class="pillar-kicker">Intelligent Fashion Tech</span>
                    <h3>Unlock breakthroughs with AI</h3>
                    <p>Custom AI agents, automated tech pack generation, and marketing automation.</p>
                    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:15px;">We integrate:</p>
                    <ul class="pillar-list">
                        <li>AI fashion marketing agents</li>
                        <li>AI-powered tech pack generation</li>
                        <li>Intelligent customer styling algorithms</li>
                        <li>PLM &amp; workflow integrations</li>
                        <li>Supply chain efficiency tools</li>
                    </ul>
                    <p class="pillar-tagline">Accelerate your brand from sketch to global scale effortlessly.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- PHILOSOPHY -->`;
indexReplacements.push([brokenIndexMatch, recoveredIndexContent]);

updateFile('index.html', indexReplacements);

// 2. SERVICES.HTML
const servicesReplacements = [];
servicesReplacements.push([/<h1 class="hero-title">How We Work<br>With You<\/h1>[\s\S]*?<\/p>/, `<h1 class="hero-title" style="font-size:3.5rem;">Comprehensive Fashion Growth Services: Branding, Digital Marketing & AI Tech</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Integrated solutions for DTC fashion brands—brand incubation, digital dominance, and AI automation tailored to modern fashion workflows.</p>`]);

servicesReplacements.push([/<h2>Brand Launch<\/h2>/, `<h2>Brand Architecture & Incubation</h2>`]);
servicesReplacements.push([/<p>For emerging brands going from concept to market[\s\S]*?with confidence.<\/p>/, `<p>Fashion brand identity systems, strategic positioning, and cultural storytelling. We provide full incubation for new DTC fashion brands connecting with modern audiences.</p>`]);

servicesReplacements.push([/<h2>Brand Growth<\/h2>/, `<h2>Digital Dominance for Fashion Brands</h2>`]);
servicesReplacements.push([/<p>For established brands building systematic scale[\s\S]*?full execution support.<\/p>/, `<p>Full-funnel digital marketing tailored for DTC growth. We leverage Meta, TikTok, Google paid ads, organic strategy, and trendjacking to explode your revenue velocity.</p>`]);

servicesReplacements.push([/<h2>Brand Excellence<\/h2>/, `<h2>Intelligent Fashion Tech & AI Automation</h2>`]);
servicesReplacements.push([/<p>For brands building at serious scale[\s\S]*?and custom automation.<\/p>/, `<p>Unlock breakthroughs with custom AI marketing agents, automated tech pack generation, and intelligent workflow integrations. Bespoke tools for fashion supply chain efficiency.</p>`]);

updateFile('services.html', servicesReplacements);

// 3. PRICING.HTML
const pricingReplacements = [];
pricingReplacements.push([/<h1 class="hero-title">Transparent Pricing<\/h1>[\s\S]*?<\/p>/, `<h1 class="hero-title">Transparent Pricing for Fashion Brand Growth & AI Tech</h1>
            <p class="hero-subtitle" style="max-width:560px;margin:0 auto;">Clear retainers for DTC fashion scaling—no surprises, full ROI transparency.</p>`]);

pricingReplacements.push([/<h3>From Concept<br>to Market<\/h3>/, `<h3>Emerging<br>Package</h3>`]);
pricingReplacements.push([/<span class="pc-price">₹2,50,000<\/span>[\s\S]*?<span class="pc-cadence">One-time · 8–12 week delivery<\/span>/, `<span class="pc-price">$3,000/mo</span>\n                    <span class="pc-cadence">3-month minimum</span>`]);
pricingReplacements.push([/<ul class="pc-includes">\s*<li>Complete brand strategy[\s\S]*? Operations framework<\/li>\s*<\/ul>/, `<ul class="pc-includes">
                        <li>Fashion brand identity & positioning foundations</li>
                        <li>Launch digital marketing setup (paid + organic)</li>
                        <li>Starter AI fashion tools (tech packs + basic agents)</li>
                        <li>Monthly ROI dashboards & strategy check-ins</li>
                        <li>Website &amp; sales channel foundation</li>
                    </ul>`]);

pricingReplacements.push([/<h3>Build<br>Systematic Scale<\/h3>/, `<h3>Scaling<br>Package</h3>`]);
pricingReplacements.push([/<span class="pc-price">₹75,000\/month<\/span>[\s\S]*?<span class="pc-cadence">Monthly · 3-month minimum<\/span>/, `<span class="pc-price">$7,500/mo</span>\n                    <span class="pc-cadence">Retainer</span>`]);
pricingReplacements.push([/<ul class="pc-includes">\s*<li>Ongoing tech pack development[\s\S]*? Performance reporting<\/li>\s*<\/ul>/, `<ul class="pc-includes">
                        <li>Full brand architecture & refresh for fashion brands</li>
                        <li>Multi-channel digital dominance (paid + organic systems)</li>
                        <li>Custom AI agents (marketing + production automation)</li>
                        <li>Weekly optimization calls & advanced analytics</li>
                        <li>Content trendjacking workflows</li>
                    </ul>`]);

pricingReplacements.push([/<h3>Complete Brand<br>Operations<\/h3>/, `<h3>Established<br>Package</h3>`]);
pricingReplacements.push([/<span class="pc-price">₹1,50,000\/month<\/span>[\s\S]*?<span class="pc-cadence">Monthly · Custom scope<\/span>/, `<span class="pc-price">$15,000+/mo</span>\n                    <span class="pc-cadence">Retainer (Customized)</span>`]);
pricingReplacements.push([/<ul class="pc-includes">\s*<li>Everything in Brand Growth[\s\S]*? 4-hour priority support<\/li>\s*<\/ul>/, `<ul class="pc-includes">
                        <li>Enterprise fashion brand evolution & positioning</li>
                        <li>High-efficiency full-funnel digital marketing</li>
                        <li>Advanced AI integrations (supply chain + lifecycle)</li>
                        <li>Dedicated support & 4-hour priority response</li>
                        <li>Predictive forecasting & deep reviews</li>
                    </ul>`]);

updateFile('pricing.html', pricingReplacements);

// 4. ABOUT.HTML
const aboutReplacements = [];
aboutReplacements.push([/<h1 class="hero-title">Building Brand Infrastructure<br>for Modern Fashion<\/h1>[\s\S]*?<\/p>/, `<h1 class="hero-title" style="font-size:3.5rem;">Premier Fashion Tech &<br>Digital Marketing Agency</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Blending haute creative vision with AI intelligence for DTC fashion dominance.</p>`]);

// Use a softer regex to match the story content
aboutReplacements.push([/<div class="story-left">\s*<span class="story-label">Our Story<\/span>[\s\S]*?scalable brands\.<\/p>\s*<\/div>/, `<div class="story-left">
                    <span class="story-label">Our Origin</span>
                    <h2>Why We Built Genixovate</h2>
                </div>
                <div class="story-right">
                    <p class="standout">At the intersection of timeless fashion aesthetics and cutting-edge AI.</p>
                    <p>Genixovate was founded to empower brands. Our team—fashion directors, DTC scaling experts, and AI engineers—delivers unified solutions for fashion brand growth.</p>
                    <p><strong>Our Philosophy</strong>: No more fragmented agencies. We integrate brand storytelling, digital marketing for fashion brands, and AI automation in fashion to create exponential outcomes.</p>
                    <p><strong>Why Fashion Brands Choose Genixovate:</strong></p>
                    <ul style="margin-left:20px;margin-bottom:20px;color:var(--text-muted);font-size:0.95rem;line-height:1.7;">
                        <li style="margin-bottom:8px">Deep expertise in DTC fashion & emerging labels</li>
                        <li style="margin-bottom:8px">Proprietary AI tuned for apparel workflows & marketing</li>
                        <li style="margin-bottom:8px">Proven strategies from runway to global e-commerce scale</li>
                        <li style="margin-bottom:8px">Avant-garde edge: always ahead in fashion tech trends</li>
                    </ul>
                    <p style="color:var(--text-primary,#111);font-style:italic;font-weight:600;font-size:1.2rem;">Credo: Sleek. Visionary. Results-driven.</p>
                </div>`]);

updateFile('about.html', aboutReplacements);
