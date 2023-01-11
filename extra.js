const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const {executablePath} = require('puppeteer');
puppeteer.use(StealthPlugin());

puppeteer.launch({ headless: true, 
                    executablePath: "/opt/google/chrome/google-chrome", 
                    userDataDir: "/home/astrashevichutse/.config/google-chrome/Default",
                    args: [ '--proxy-server=http://194.5.193.183:80' ] })
                .then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://bot.sannysoft.com')
  await page.waitForTimeout(5000)
  await page.screenshot({ path: 'testresult3.png', fullPage: true })
  await browser.close()
  console.log(`All done, check the screenshot. ✨`)
})