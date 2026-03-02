const fs = require('fs');
let content = fs.readFileSync('c:/Users/lenovo/OneDrive/Documents/Genixovate/tech-packs.html', 'utf8');

// Replacements
content = content.replace(/₹8,000/g, '$100');
content = content.replace(/₹20–40K/g, '$250–$500');
content = content.replace(/₹30,000/g, '$400');
content = content.replace(/₹15,000/g, '$200');
content = content.replace(/₹2\.4–4\.8L/g, '$3,000–$6,000');
content = content.replace(/₹96K/g, '$1,200');
content = content.replace(/₹1\.44–3\.84L/g, '$1,800–$4,800');
content = content.replace(/₹1\.8L/g, '$2,400');
content = content.replace(/₹60K–3L/g, '$600–$3,600');
content = content.replace(/₹8K/g, '$100');
content = content.replace(/₹15K/g, '$200');

fs.writeFileSync('c:/Users/lenovo/OneDrive/Documents/Genixovate/tech-packs.html', content, 'utf8');
console.log('Done converting tech-packs.html to USD');
