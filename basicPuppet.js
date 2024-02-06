const puppeteer = require('puppeteer')

async function run() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://suika.world/play/offline');

  for (let i = 0; i < 10000; i++)
  {//230 420
    let x = Math.floor(Math.random() * (420 - 230 + 1)) + 230
    console.log(x)
    await page.mouse.click(x,400)
    await new Promise(r => setTimeout(r, 2000));
  }

  // const h1Text = await page.$eval('h1', element => element.textContent)
  // console.log('H1 Text: ' + h1Text)

  await browser.waitForTarget(()=> false);
};

run();