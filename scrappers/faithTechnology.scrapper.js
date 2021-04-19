const slackMessageParser = require('../utils/slackMessageParser')
const axios = require('../utils/axios')
const FaithTechnology = require('../pageObjects/faithTechnology')
const {faithTechnology} = require('../utils/constants').urls
const {possibleCards}  = require('../utils/constants')
const {SLACK_BOT_HOOK} = process.env
const {getCardsMatches, sendSlackMessage} = require('../utils/common')

const scraperObject = {

    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${faithTechnology}...`);
        // Navigate to the selected page
        await page.goto(faithTechnology);
        // Wait for the required DOM to be rendered
        await page.waitForSelector(FaithTechnology.productsName);
        // Retrieve all the cards that are available
        let cards = await page.$$eval(FaithTechnology.productsName, card=> card.map(c=> c.innerText.toLowerCase()))
        const cardMatches = getCardsMatches(cards)
        // Print results and send slack message
        const slackMessage = slackMessageParser.faithTechnology(cardMatches)
        sendSlackMessage(cardMatches, slackMessage)
        // Close page ( tab )
        await page.close()
    }
}

module.exports = scraperObject;