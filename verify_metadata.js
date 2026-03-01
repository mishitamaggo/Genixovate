const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const titleRegex = /<title>(.*?)<\/title>/is;
const descRegex = /<meta\s+name="description"\s+content="(.*?)"\s*\/?>/is;

let allValid = true;

files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const titleMatch = content.match(titleRegex);
    const descMatch = content.match(descRegex);

    const title = titleMatch ? titleMatch[1] : '';
    // Clean up excessive newlines and spaces that code formatting might inject
    const desc = descMatch ? descMatch[1].replace(/\n\s+/g, ' ') : '';

    console.log(`\n--- ${file} ---`);
    console.log(`Title Length: ${title.length}`);
    if (title.length < 51 || title.length > 59) {
        console.log(`  [FAIL] Title: ${title}`);
        allValid = false;
    } else {
        console.log(`  [PASS] Title`);
    }

    console.log(`Desc Length: ${desc.length}`);
    if (desc.length < 151 || desc.length > 159) {
        console.log(`  [FAIL] Desc: ${desc}`);
        allValid = false;
    } else {
        console.log(`  [PASS] Desc`);
    }
});

if (allValid) {
    console.log("\nALL METADATA MEETS EXACT LENGTH CONSTRAINTS.");
} else {
    console.log("\nWARNING: SOME METADATA FAILED LENGTH CONSTRAINTS.");
}
