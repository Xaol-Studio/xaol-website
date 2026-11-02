const puppeteer = require('puppeteer');
const path = require('path');

async function runBenchmark() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  const filePath = `file://${path.resolve('demo/pyme-manager.html')}`;
  await page.goto(filePath);

  // We will test rendering 10000 items
  const result = await page.evaluate(() => {
    const largeList = [];
    for (let i = 0; i < 5000; i++) {
      largeList.push({
        id: i,
        sku: 'SKU-' + i,
        name: 'Product ' + i,
        category: 'Cat',
        price: 10,
        stock: 5,
        minStock: 2
      });
    }

    // Warmup
    renderInventory(largeList);

    let totalTime = 0;
    const iterations = 5;
    for (let iter = 0; iter < iterations; iter++) {
      const t0 = performance.now();
      renderInventory(largeList);
      const t1 = performance.now();
      totalTime += (t1 - t0);
    }

    return totalTime / iterations;
  });

  console.log(`Average render time (5000 items, 5 iterations): ${result.toFixed(2)} ms`);
  await browser.close();
}

runBenchmark().catch(console.error);
