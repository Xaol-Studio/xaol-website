import time
from playwright.sync_api import sync_playwright

def test_performance():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        page.goto("http://localhost:8080/demo/pyme-manager.html")

        time_taken = page.evaluate("""() => {
            const start = performance.now();
            const bigList = [];
            for(let i=0; i<100; i++) {
                bigList.push(...products);
            }
            renderInventory(bigList);
            return performance.now() - start;
        }""")
        print(f"Time taken: {time_taken} ms")
        browser.close()

if __name__ == "__main__":
    test_performance()
