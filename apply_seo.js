const fs = require('fs');
const path = require('path');

const dir = __dirname;

// Helper function to read and write safely
function updateFile(filename, replacements) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) {
        console.error(`File ${filename} not found.`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf-8');
    let originalLength = content.length;

    for (const [search, replace] of replacements) {
        if (typeof search === 'string') {
            if (!content.includes(search)) {
                console.warn(`[!] String not found in ${filename}: ${search.substring(0, 50)}...`);
            }
            content = content.replace(search, replace);
        } else if (search instanceof RegExp) {
            content = content.replace(search, replace);
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filename} (Length: ${originalLength} -> ${content.length})`);
}

// 1. INDEX.HTML
const indexReplacements = [];

// Reconstructing broken hero + value + pillars section
const brokenIndexMatch = `    <!-- HERO -->
    <section class="hero">
        <!-- PHILOSOPHY -->`;

const recoveredIndexContent = `    <!-- HERO -->
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

const philosophyPattern = /<!-- PHILOSOPHY -->[\s\S]*?<\/section>/;
const newPhilosophy = `<!-- PHILOSOPHY -->
    <section class="philosophy-section fade-up-element">
        <div class="container">
            <span class="section-kicker" style="color:rgba(255,255,255,.4);">Why Forward-Thinking Labels Partner with Us</span>
            <h2
                style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3.5rem);color:#fff;margin-bottom:60px;max-width:700px;">
                Engineered dominance for tomorrow's fashion icons.</h2>
            <div class="philosophy-body">
                <p class="highlight">"Genixovate transformed our DTC fashion growth—AI automation slashed production time while digital strategies exploded conversions." <br>— Scaling DTC Brand</p>
                <p class="highlight" style="margin-top:40px;">"Finally, fashion tech that matches creative ambition with intelligent efficiency." <br>— Emerging Designer</p>
                <p style="color:rgba(255,255,255,.55);font-style:italic;margin-top:60px;">Ready for AI-powered fashion scaling?</p>
                <a href="contact.html" class="btn btn-primary" style="margin-top:20px;display:inline-block;padding:15px 30px;">Book a Discovery Call &rarr;</a>
            </div>
        </div>
    </section>`;
indexReplacements.push([philosophyPattern, newPhilosophy]);

updateFile('index.html', indexReplacements);

// 2. SERVICES.HTML
const servicesReplacements = [];
const sHeroSearch = `<h1 class="hero-title">How We Work<br>With You</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Three service models built around where you
                are and where you want to go.</p>`;
const sHeroReplace = `<h1 class="hero-title" style="font-size:3.5rem;">Comprehensive Fashion Growth Services: Branding, Digital Marketing & AI Tech</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Integrated solutions for DTC fashion brands—brand incubation, digital dominance, and AI automation tailored to modern fashion workflows.</p>`;
servicesReplacements.push([sHeroSearch, sHeroReplace]);

servicesReplacements.push([`<h2>Brand Launch</h2>`, `<h2>Brand Architecture & Incubation</h2>`]);
servicesReplacements.push([`<p>For emerging brands going from concept to market. We build your complete brand infrastructure
                            — everything a modern fashion brand needs to launch with confidence.</p>`, `<p>Fashion brand identity systems, strategic positioning, and cultural storytelling. We provide full incubation for new DTC fashion brands connecting with modern audiences.</p>`]);

servicesReplacements.push([`<h2>Brand Growth</h2>`, `<h2>Digital Dominance for Fashion Brands</h2>`]);
servicesReplacements.push([`<p>For established brands building systematic scale. We create the infrastructure that lets you
                            grow without chaos — ongoing strategic partnership with full execution support.</p>`, `<p>Full-funnel digital marketing tailored for DTC growth. We leverage Meta, TikTok, Google paid ads, organic strategy, and trendjacking to explode your revenue velocity.</p>`]);

servicesReplacements.push([`<h2>Brand Excellence</h2>`, `<h2>Intelligent Fashion Tech & AI Automation</h2>`]);
servicesReplacements.push([`<p>For brands building at serious scale. We become your complete brand operations — embedded
                            strategic partner with unlimited execution capability and custom automation.</p>`, `<p>Unlock breakthroughs with custom AI marketing agents, automated tech pack generation, and intelligent workflow integrations. Bespoke tools for fashion supply chain efficiency.</p>`]);

updateFile('services.html', servicesReplacements);

// 3. PRICING.HTML
const pricingReplacements = [];
const pHeroSearch = `<h1 class="hero-title">Transparent Pricing</h1>
            <p class="hero-subtitle" style="max-width:560px;margin:0 auto;">No hidden fees. No vague retainers. Clear
                investment for clear deliverables.</p>`;
const pHeroReplace = `<h1 class="hero-title">Transparent Pricing for Fashion Brand Growth & AI Tech</h1>
            <p class="hero-subtitle" style="max-width:560px;margin:0 auto;">Clear retainers for DTC fashion scaling—no surprises, full ROI transparency.</p>`;
pricingReplacements.push([pHeroSearch, pHeroReplace]);

pricingReplacements.push([`<h3>From Concept<br>to Market</h3>`, `<h3>Emerging<br>Package</h3>`]);
pricingReplacements.push([`<span class="pc-price">₹2,50,000</span>\n                    <span class="pc-cadence">One-time · 8–12 week delivery</span>`, `<span class="pc-price">$3,000/mo</span>\n                    <span class="pc-cadence">3-month minimum</span>`]);
const pCard1Search = `                    <ul class="pc-includes">
                        <li>Complete brand strategy &amp; identity</li>
                        <li>Tech packs for first collection</li>
                        <li>Size grading &amp; documentation</li>
                        <li>Content production system</li>
                        <li>Website &amp; sales channel setup</li>
                        <li>Customer journey automation</li>
                        <li>Launch campaign execution</li>
                        <li>Operations framework</li>
                    </ul>`;
const pCard1Replace = `                    <ul class="pc-includes">
                        <li>Fashion brand identity & positioning foundations</li>
                        <li>Launch digital marketing setup (paid + organic)</li>
                        <li>Starter AI fashion tools (tech packs + basic agents)</li>
                        <li>Monthly ROI dashboards & strategy check-ins</li>
                        <li>Website &amp; sales channel foundation</li>
                    </ul>`;
pricingReplacements.push([pCard1Search, pCard1Replace]);

pricingReplacements.push([`<h3>Build<br>Systematic Scale</h3>`, `<h3>Scaling<br>Package</h3>`]);
pricingReplacements.push([`<span class="pc-price">₹75,000/month</span>\n                    <span class="pc-cadence">Monthly · 3-month minimum</span>`, `<span class="pc-price">$7,500/mo</span>\n                    <span class="pc-cadence">Retainer</span>`]);
const pCard2Search = `                    <ul class="pc-includes">
                        <li>Ongoing tech pack development</li>
                        <li>Collection planning frameworks</li>
                        <li>Multi-channel expansion</li>
                        <li>Customer experience automation</li>
                        <li>Content production workflows</li>
                        <li>Performance optimization</li>
                        <li>Monthly strategy sessions</li>
                        <li>Performance reporting</li>
                    </ul>`;
const pCard2Replace = `                    <ul class="pc-includes">
                        <li>Full brand architecture & refresh for fashion brands</li>
                        <li>Multi-channel digital dominance (paid + organic systems)</li>
                        <li>Custom AI agents (marketing + production automation)</li>
                        <li>Weekly optimization calls & advanced analytics</li>
                        <li>Content trendjacking workflows</li>
                    </ul>`;
pricingReplacements.push([pCard2Search, pCard2Replace]);

pricingReplacements.push([`<h3>Complete Brand<br>Operations</h3>`, `<h3>Established<br>Package</h3>`]);
pricingReplacements.push([`<span class="pc-price">₹1,50,000/month</span>\n                    <span class="pc-cadence">Monthly · Custom scope</span>`, `<span class="pc-price">$15,000+/mo</span>\n                    <span class="pc-cadence">Retainer (Customized)</span>`]);
const pCard3Search = `                    <ul class="pc-includes">
                        <li>Everything in Brand Growth</li>
                        <li>Unlimited product development</li>
                        <li>Complete content systems</li>
                        <li>Full multi-channel management</li>
                        <li>Custom AI automation</li>
                        <li>Dedicated senior team</li>
                        <li>Weekly strategy sessions</li>
                        <li>4-hour priority support</li>
                    </ul>`;
const pCard3Replace = `                    <ul class="pc-includes">
                        <li>Enterprise fashion brand evolution & positioning</li>
                        <li>High-efficiency full-funnel digital marketing</li>
                        <li>Advanced AI integrations (supply chain + lifecycle)</li>
                        <li>Dedicated support & 4-hour priority response</li>
                        <li>Predictive forecasting & deep reviews</li>
                    </ul>`;
pricingReplacements.push([pCard3Search, pCard3Replace]);

updateFile('pricing.html', pricingReplacements);

// 4. ABOUT.HTML
const aboutReplacements = [];
const aHeroSearch = `<h1 class="hero-title">Building Brand Infrastructure<br>for Modern Fashion</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">We believe great fashion brands need more
                than creative vision. They need intelligent systems.</p>`;
const aHeroReplace = `<h1 class="hero-title" style="font-size:3.5rem;">Premier Fashion Tech &<br>Digital Marketing Agency</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Blending haute creative vision with AI intelligence for DTC fashion dominance.</p>`;
aboutReplacements.push([aHeroSearch, aHeroReplace]);

const aStorySearch = `<div class="story-left">
                    <span class="story-label">Our Story</span>
                    <h2>Why We Built Genixovate</h2>
                </div>
                <div class="story-right">
                    <p class="standout">Fashion founders are designers, not operations experts.</p>
                    <p>They understand aesthetics, silhouettes, customer desires. What they often lack is infrastructure
                        — the technical systems that transform creative vision into functioning brands.</p>
                    <p>Tech packs. Content workflows. Operations frameworks. Sales systems. The unglamorous but
                        essential architecture that lets brands exist and scale.</p>
                    <p>We built Genixovate to provide this infrastructure.</p>
                    <p>Our approach combines deep fashion expertise with proprietary technology. We've developed AI
                        systems specifically for fashion brand building — tools that handle repetitive technical work
                        while humans focus on strategy and creativity.</p>
                    <p>The result: Fashion founders get enterprise-quality infrastructure at a fraction of traditional
                        cost and time.</p>
                    <p style="color:var(--text-primary,#111);font-style:italic;">We're not here to run campaigns or
                        manage social media. We're here to build the complete technical foundation that transforms
                        design studios into scalable brands.</p>
                </div>`;
const aStoryReplace = `<div class="story-left">
                    <span class="story-label">Our Origin</span>
                    <h2>Why We Built Genixovate</h2>
                </div>
                <div class="story-right">
                    <p class="standout">At the intersection of timeless fashion aesthetics and cutting-edge AI.</p>
                    <p>Genixovate was founded to empower brands. Our team—fashion directors, DTC scaling experts, and AI engineers—delivers unified solutions for fashion brand growth.</p>
                    <p><strong>Our Philosophy</strong>: No more fragmented agencies. We integrate brand storytelling, digital marketing for fashion brands, and AI automation in fashion to create exponential outcomes.</p>
                    <p><strong>Why Fashion Brands Choose Genixovate:</strong></p>
                    <ul style="margin-left:20px;margin-bottom:20px;">
                        <li>Deep expertise in DTC fashion & emerging labels</li>
                        <li>Proprietary AI tuned for apparel workflows & marketing</li>
                        <li>Proven strategies from runway to global e-commerce scale</li>
                        <li>Avant-garde edge: always ahead in fashion tech trends</li>
                    </ul>
                    <p style="color:var(--text-primary,#111);font-style:italic;font-weight:600;font-size:1.2rem;">Credo: Sleek. Visionary. Results-driven.</p>
                </div>`;
aboutReplacements.push([aStorySearch, aStoryReplace]);

updateFile('about.html', aboutReplacements);

// 5. HOW-WE-BUILD.HTML
const howReplacements = [];
const hHeroSearch = `<h1 class="hero-title">Our Process</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Brand building requires both creative vision
                and systematic execution. Here's how we approach both.</p>`;
const hHeroReplace = `<h1 class="hero-title">Our Process: From Fashion Vision to AI-Powered Scale</h1>
            <p class="hero-subtitle" style="max-width:600px;margin:0 auto;">Collaborative, methodical acceleration for DTC fashion brands.</p>`;
howReplacements.push([hHeroSearch, hHeroReplace]);

const stage1Search = `<h2>Understanding Before Building</h2>
                    <p>We begin every project with deep discovery. Your vision, your customer, your market, your
                        constraints. We need to understand what you're building and why before we architect systems.</p>`;
const stage1Replace = `<h2>Discovery & Audit (Weeks 1–2)</h2>
                    <p>Immersion in your fashion brand: competitor analysis, data review, AI readiness for fashion workflows. Diagnosis & growth roadmap.</p>`;
howReplacements.push([stage1Search, stage1Replace]);

const stage2Search = `<h2>Foundation Before Execution</h2>
                    <p>Strong brands are built on strong strategy. We develop your positioning, define your
                        differentiation, establish your brand architecture. This becomes the foundation for everything
                        else.</p>`;
const stage2Replace = `<h2>Strategy & Architecture (Weeks 3–6)</h2>
                    <p>Co-create: brand narrative, digital marketing thesis, AI agent specs for fashion. Blueprint & working assets delivered.</p>`;
howReplacements.push([stage2Search, stage2Replace]);

const stage3Search = `<h2>Systems That Work</h2>
                    <p>With strategy established, we build your infrastructure. Product development systems, content
                        workflows, sales channels, operations frameworks. Everything technical that needs to exist.</p>`;
const stage3Replace = `<h2>Build & Activate (Weeks 7–12+)</h2>
                    <p>Execution: identity rollout, channels live, AI automation deployed. Agile sprints tailored for fashion seasonality and rapid growth.</p>`;
howReplacements.push([stage3Search, stage3Replace]);

const stage4Search = `<h2>Growth with Intention</h2>
                    <p>After launch, we focus on systematic growth. Refining systems based on data, expanding
                        capabilities, building team capacity. Scaling without chaos requires the right architecture.</p>`;
const stage4Replace = `<h2>Scale & Optimize (Ongoing)</h2>
                    <p>Refinement: performance tuning, AI learning, trend integration, and regular monthly ROI evaluation for DTC fashion efficiency.</p>`;
howReplacements.push([stage4Search, stage4Replace]);

// remove 'launch' stage (index 04 original, scale should be new 04)
const removeLaunch = /<div class="process-stage fade-up-element">\s*<div class="stage-index">04<\/div>[\s\S]*?<!-- CTA Strip -->/;
const afterRemoveLaunch = `<!-- CTA Strip -->`;

let howFile = path.join(dir, 'how-we-build.html');
let howContent = fs.readFileSync(howFile, 'utf-8');
for (const [s, r] of howReplacements) {
    howContent = howContent.replace(s, r);
}
// Delete the old "04 Launch" block and the duplicate scale stage logic if it's there
let scaleIndexStart = howContent.indexOf('<div class="stage-index">05</div>');
if (scaleIndexStart !== -1) {
    howContent = howContent.replace('<div class="stage-index">05</div>', '<div class="stage-index">04</div>');
}
const launchRegex = /<div class="process-stage fade-up-element">\s*<div class="stage-index">04<\/div>\s*<div>\s*<span class="stage-name">Launch<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="process-stage fade-up-element">\s*<div class="stage-index">04<\/div>/;
howContent = howContent.replace(launchRegex, '<div class="process-stage fade-up-element">\n                <div class="stage-index">04</div>');
fs.writeFileSync(howFile, howContent, 'utf-8');
console.log('Updated how-we-build.html');

console.log("All tasks completed dynamically.");
