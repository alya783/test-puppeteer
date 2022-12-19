const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        //headless: false,
        //defaultViewport: false,
        userDataDir: './tmp'
    });
    const page = await browser.newPage();
  
    await page.goto('https://www.amazon.com/s?i=computers-intl-ship&bbn=16225007011&rh=n%3A16225007011%2Cn%3A11036071%2Cp_36%3A1253503011&dc&fs=true&page=3&qid=1671456401&rnid=16225007011&ref=sr_pg_3',{
        waitUntil: 'load'
    })
    
    const is_disabled = await page.$('span.s-pagination-disabled') !== null;
})();