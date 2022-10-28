import puppeteer from 'puppeteer';
import { inject } from './injector.js';
import { restoreCookie } from './cookies.js';
import { resetPluginIndex } from './plugins.js';


(async () => {
  resetPluginIndex();
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    devtools: true,
    args: [  '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process', 
    '--enable-features=NetworkService']
  });
  const page = await browser.newPage();
  
  await restoreCookie(page);
  
  await inject(page);
  await page.goto('https://hundeparken.net/h5');

})();