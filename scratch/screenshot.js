const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
  'https://nubodyofdallas.com/',
  'https://dermato-wbs.webflow.io/',
  'https://serenebloom.webflow.io/#services',
  'https://serenique-template.webflow.io/'
];

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const data = [];
  
  for (let i = 0; i < urls.length; i++) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    console.log('Visiting', urls[i]);
    try {
      await page.goto(urls[i], { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait a little extra for animations
      await new Promise(r => setTimeout(r, 2000));
      
      // take a full page screenshot
      await page.screenshot({ path: `/Users/kobe/Documents/Freelance/NuBodyDallas/scratch/screenshot_${i+1}.webp`, fullPage: true, type: 'webp' });
      
      // extract computed styles for h1, h2, p to get typography
      const styles = await page.evaluate(() => {
        const getStyle = (selector) => {
          const el = document.querySelector(selector);
          if (!el) return null;
          const s = window.getComputedStyle(el);
          return {
            fontFamily: s.fontFamily,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            color: s.color
          };
        };
        return {
          h1: getStyle('h1'),
          h2: getStyle('h2'),
          p: getStyle('p'),
          bodyBg: window.getComputedStyle(document.body).backgroundColor
        };
      });
      data.push({ url: urls[i], styles });
      
    } catch (e) {
      console.error('Error on', urls[i], e);
      data.push({ url: urls[i], error: e.message });
    }
    await page.close();
  }
  
  await browser.close();
  fs.writeFileSync('/Users/kobe/Documents/Freelance/NuBodyDallas/scratch/results.json', JSON.stringify(data, null, 2));
  console.log('Done');
}

run();
