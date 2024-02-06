const puppeteer = require('puppeteer')
const fs = require('fs')

async function run() {
  let gameOver = false;

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://suika.world/play/offline');

  //While the game has not ended (the h1 tag containing Game Over has been found)
  while(gameOver != true) 
  {
    //Mouse clicked at a random coordinate between the left and the right of the game window
    let x = Math.floor(Math.random() * (420 - 230 + 1)) + 230
    await page.mouse.click(x,400) 

    try{
      await page.waitForSelector('h1',{timeout:2000}) //Try to find the h1 element. This is fine because there is only 1 h1 tag and that is when the game over state is reached

      //If found then we take a screenshot of the score and then change the game over varaible so the loop ends
      const numOfFiles = fs.readdirSync('./Scores').length;
      await page.screenshot({path: `./Scores/${numOfFiles}score.png`})
      gameOver = true;
      
    }catch(error)
    {

    }
  }
  await browser.close();
};

run();