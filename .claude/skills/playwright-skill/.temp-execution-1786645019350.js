const { chromium } = require('playwright');

const TARGET_URL = 'http://localhost:3002';
const SHOT_DIR = 'C:/Users/raiha/AppData/Local/Temp/claude/d--partnershipbusinesses-skyzone-skyzonebd/56c3e1e3-3094-45a4-9dff-8195a6d01a42/scratchpad';
const PRODUCT_ID = 'cmjlk4a2s0001jm04xs65s7db';

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Check the related-products response shape directly
  const page0 = await browser.newPage();
  const res = await page0.request.get(`${TARGET_URL}/api/products/${PRODUCT_ID}/related`);
  const body = await res.json();
  console.log('related response:', JSON.stringify(body).slice(0, 300));
  await page0.close();

  // Visual check: product detail page at mobile width, reviews tab clicked
  const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
  await page.goto(`${TARGET_URL}/products/${PRODUCT_ID}`, { waitUntil: 'networkidle', timeout: 20000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${SHOT_DIR}/final-mobile-product-top.png` });

  // Scroll to and click the Reviews tab
  const reviewsTab = page.getByRole('button', { name: 'Reviews' });
  await reviewsTab.scrollIntoViewIfNeeded();
  await reviewsTab.click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${SHOT_DIR}/final-mobile-reviews-tab.png` });

  // Scroll to bottom for related products
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${SHOT_DIR}/final-mobile-related.png` });

  await browser.close();
  console.log('Done');
})();
