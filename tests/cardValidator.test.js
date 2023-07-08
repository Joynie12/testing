import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: false, // отключение безголового режима (показывает графический интерфейс)
      // slowMo: 250, // замедление действий Puppeteer (полезно для отладки)
      // devtools: true, // открытие инструментов разработчика Chrome
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add your test case description here', async () => {
    await page.goto(baseUrl);
      
    await page.type('#cardNumberInput', '4111111111111111');
      
    await page.click('#validateButton');
      
    await page.waitForSelector('#resultMessage');
      
    const resultText = await page.$eval('#resultMessage', (el) => el.textContent);
    expect(resultText).toContain('Visa');
      
    const cardImageSrc = await page.$eval('#cardImage', (el) => el.src);
    expect(cardImageSrc).toContain('card-visa.png');
    });
});
