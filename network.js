const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
    });

    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on("request", (request) => {
        if (request.resourceType() === "image") {
          request.respond({
            status: 200,
            contentType: "image/jpeg",
            body: fs.readFileSync("./corgi.jpg"),
          });
        } else {
          request.continue();
        }
    });
    
   
    /**page.on('response', async(response)=>{
        //console.log(request.url());
        const url = response.url();

        if(url.includes('https://www.google.com/log?format=json')){
            console.log(`url: ${url}`);
            console.log(`Headers: ${JSON.stringify(response.headers())}`);
            console.log(`Response: ${await response.json()}`);
        }
    })**/

    await page.goto(
        "https://www.google.com/search?q=corgi&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi_h8qf47_8AhXFtYsKHVDIA3gQ_AUoAXoECAEQAw&biw=1846&bih=980&dpr=1"
    );


   
})();
  