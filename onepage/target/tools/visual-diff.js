/**
 * Visual Diff Tool
 * 
 * Takes screenshots of ref and target sites in VR mode and generates diff images.
 * 
 * Usage:
 *   node visual-diff.js
 * 
 * Requirements:
 *   - npm install puppeteer pixelmatch pngjs
 *   - Ref site running on localhost:8000
 *   - Target site running on localhost:5173
 */

const puppeteer = require('puppeteer');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');
const fs = require('fs');
const path = require('path');

const CONFIG = {
    ref: 'http://localhost:8000?vr=1',
    target: 'http://localhost:5173?vr=1',
    outputDir: path.join(__dirname, 'output'),
    viewport: { width: 1280, height: 800 },
    fullPage: true,
};

async function captureScreenshot(browser, url, name) {
    const page = await browser.newPage();
    await page.setViewport(CONFIG.viewport);
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Wait for fonts and images to load
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 1000));

    const filepath = path.join(CONFIG.outputDir, `${name}.png`);
    await page.screenshot({ path: filepath, fullPage: CONFIG.fullPage });
    console.log(`Captured: ${filepath}`);

    await page.close();
    return filepath;
}

function compareImages(img1Path, img2Path, diffPath) {
    const img1 = PNG.sync.read(fs.readFileSync(img1Path));
    const img2 = PNG.sync.read(fs.readFileSync(img2Path));

    // Resize if dimensions don't match (use smaller)
    const width = Math.min(img1.width, img2.width);
    const height = Math.min(img1.height, img2.height);

    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(
        img1.data, img2.data, diff.data,
        width, height,
        { threshold: 0.1 }
    );

    fs.writeFileSync(diffPath, PNG.sync.write(diff));

    const totalPixels = width * height;
    const diffPercentage = ((numDiffPixels / totalPixels) * 100).toFixed(2);

    console.log(`\nComparison Results:`);
    console.log(`  Dimensions: ${width}x${height}`);
    console.log(`  Different pixels: ${numDiffPixels.toLocaleString()}`);
    console.log(`  Difference: ${diffPercentage}%`);
    console.log(`  Diff image: ${diffPath}`);

    return { numDiffPixels, diffPercentage };
}

async function main() {
    // Create output directory
    if (!fs.existsSync(CONFIG.outputDir)) {
        fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    console.log('🚀 Starting Visual Diff Tool...\n');
    console.log(`Ref: ${CONFIG.ref}`);
    console.log(`Target: ${CONFIG.target}\n`);

    const browser = await puppeteer.launch({ headless: 'new' });

    try {
        // Capture screenshots
        const refPath = await captureScreenshot(browser, CONFIG.ref, 'ref');
        const targetPath = await captureScreenshot(browser, CONFIG.target, 'target');

        // Compare images
        const diffPath = path.join(CONFIG.outputDir, 'diff.png');
        const results = compareImages(refPath, targetPath, diffPath);

        // Save results JSON
        const resultsPath = path.join(CONFIG.outputDir, 'results.json');
        fs.writeFileSync(resultsPath, JSON.stringify({
            timestamp: new Date().toISOString(),
            ref: CONFIG.ref,
            target: CONFIG.target,
            viewport: CONFIG.viewport,
            ...results
        }, null, 2));

        console.log(`\n✅ Done! Results saved to ${CONFIG.outputDir}`);

    } catch (err) {
        console.error('❌ Error:', err.message);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

main();
