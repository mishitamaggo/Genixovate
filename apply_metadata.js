const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const metadataMap = {
    "index.html": {
        "title": "Genixovate | Elite Fashion Brand Building & AI Marketing",
        "description": "Architecting complete brand systems for fashion labels. From identity to product development to market infrastructure, every element is designed to scale."
    },
    "about.html": {
        "title": "About Genixovate | Premier Fashion Tech & Marketing ",
        "description": "We combine deep fashion expertise with proprietary AI technology, offering ambitious founders the enterprise-quality infrastructure needed for massive growth."
    },
    "agents.html": {
        "title": "Fashion AI Agents | Automate Operations & Marketing  ",
        "description": "Deploy custom AI agents built specifically for modern fashion brand operations. Scale your content creation, marketing workflows, and technical efficiency."
    },
    "blogs.html": {
        "title": "Genixovate Journal | Fashion Tech & Marketing Insights",
        "description": "Read the latest insights on fashion brand building, digital marketing strategies, and how AI technology is revolutionizing the future of the apparel sector."
    },
    "brand-systems.html": {
        "title": "Complete Brand Systems for Fashion Labels | Genixovate",
        "description": "Build robust brand systems for your fashion label. We design strategy, product development pathways, content production, and advanced sales infrastructure."
    },
    "contact.html": {
        "title": "Start a Project | Build Your Fashion Brand | Genixovate",
        "description": "Start building your future fashion brand with Genixovate. Book a discovery call today to discuss growth infrastructure, brand launches, and bespoke systems."
    },
    "digital-systems.html": {
        "title": "Digital Systems | Intelligent Growth for Fashion Brands",
        "description": "Leverage intelligent digital growth systems tailored for fashion brands. We provide structured frameworks for supreme performance clarity and vast scale."
    },
    "faq.html": {
        "title": "Frequently Asked Questions | Fashion Tech | Genixovate",
        "description": "Read the Genixovate FAQ. We answer all your questions about our fashion brand building process, digital growth strategies, and enterprise AI automations."
    },
    "how-we-build.html": {
        "title": "Our Process | How We Build Modern Fashion Brands   ",
        "description": "Discover how we build modern fashion brands. Read through our proven four-stage methodology for achieving comprehensive and sustainable fashion label scale."
    },
    "pricing.html": {
        "title": "Pricing | Transparent Fashion Brand Building Costs ",
        "description": "Transparent pricing for fashion brand building. Explore our curated packages: Brand Launch, Brand Growth, and Brand Excellence to fit your exact budget."
    },
    "services.html": {
        "title": "Services | Complete Fashion Brand Infrastructure Solutions",
        "description": "Discover three distinct ways to build with Genixovate. From comprehensive brand launches to continuous growth, we provide complete fashion infrastructure."
    },
    "tech-packs.html": {
        "title": "AI Tech Packs | Fast Generation for Fashion Brands    ",
        "description": "Experience AI Tech Pack Generation for Fashion Brands. Upload your design sketches and receive manufacturing-ready tech packs within twenty-four hours."
    }
};

const titleRegex = /<title>.*?<\/title>/is;
const descRegex = /<meta\s+name="description"\s+content=".*?"\s*\/?>/is;

let totalUpdated = 0;

files.forEach(file => {
    if (metadataMap[file]) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        const newTitle = `<title>${metadataMap[file].title}</title>`;
        const newDesc = `<meta name="description"\n        content="${metadataMap[file].description}">`;

        // Replace Title
        if (titleRegex.test(content)) {
            content = content.replace(titleRegex, newTitle);
        } else {
            content = content.replace(/<head>/i, '<head>\n    ' + newTitle);
        }

        // Replace Description
        if (descRegex.test(content)) {
            content = content.replace(descRegex, newDesc);
        } else {
            // Place after title if missing
            content = content.replace(newTitle, newTitle + '\n    ' + newDesc);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        totalUpdated++;
    }
});

console.log(`Successfully applied exact-length meta titles and descriptions to ${totalUpdated} HTML files.`);
