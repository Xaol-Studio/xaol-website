const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function runBenchmark() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const fileUrl = 'file://' + path.resolve(__dirname, 'demo/cotizador-refaccionaria.html');
  await page.goto(fileUrl);

  const baselineResult = await page.evaluate(() => {
    // Populate quoteCart with lots of items for benchmarking
    quoteCart = [];
    for (let i = 0; i < 1000; i++) {
      quoteCart.push({ partId: (i % 8) + 1, quantity: 1 });
    }

    const start = performance.now();
    for (let i = 0; i < 100; i++) {
      renderQuote();
    }
    const end = performance.now();

    return end - start;
  });

  console.log(`Baseline render time: ${baselineResult.toFixed(2)} ms`);

  await browser.close();
}

runBenchmark().catch(console.error);
