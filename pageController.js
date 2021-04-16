const intelec = require('./scrappers/intelec.scrapper');
const extremeTech = require('./scrappers/extremeTech.scrapper');
const techzilla = require('./scrappers/techzilla.scrapper');
const ticotek = require('./scrappers/ticotek.scrapper');

async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        // Add all the scrappers here==>
        await extremeTech.scraper(browser);
        await intelec.scraper(browser);
        await techzilla.scraper(browser);
        await ticotek.scraper(browser);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)