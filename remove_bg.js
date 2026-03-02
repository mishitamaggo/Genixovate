const Jimp = require('jimp');

async function removeBackground() {
    const inputPath = process.argv[2];
    const outputPath = process.argv[3];

    console.log("Reading image:", inputPath);
    const image = await Jimp.read(inputPath);

    // Top-left pixel is considered background
    const bgHex = image.getPixelColor(0, 0);
    const bgRGBA = Jimp.intToRGBA(bgHex);
    console.log("Background color detected:", bgRGBA);

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        const a = this.bitmap.data[idx + 3];

        if (a === 0) return; // already transparent

        // Euclidean distance from background color
        const dist = Math.sqrt(Math.pow(r - bgRGBA.r, 2) + Math.pow(g - bgRGBA.g, 2) + Math.pow(b - bgRGBA.b, 2));

        // Soft threshold logic for anti-aliasing
        // If distance is less than 15, assume it's background and make fully transparent.
        // If distance is more than 60, assume it's foreground and keep opaque.
        // In between, scale alpha proportionally.
        let alpha = 255;
        const lowerThreshold = 15;
        const upperThreshold = 80;

        if (dist <= lowerThreshold) {
            alpha = 0;
        } else if (dist < upperThreshold) {
            alpha = ((dist - lowerThreshold) / (upperThreshold - lowerThreshold)) * 255;
        }

        // Apply alpha channel modification
        this.bitmap.data[idx + 3] = alpha;
    });

    await image.writeAsync(outputPath);
    console.log("Saved transparent image to", outputPath);
}

removeBackground().catch(err => {
    console.error(err);
    process.exit(1);
});
