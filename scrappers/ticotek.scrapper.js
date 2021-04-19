const slackMessageParser = require('../utils/slackMessageParser')
const axios = require('../utils/axios')
const Ticotek = require('../pageObjects/ticotek')
const {ticotek} = require('../utils/constants').urls
const {possibleCards}  = require('../utils/constants')
const {SLACK_BOT_HOOK} = process.env
const {getCardsMatches, sendSlackMessage} = require('../utils/common')

const scraperObject = {

    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${ticotek}...`);
        // Navigate to the selected page
        await page.goto(ticotek);
        // Wait for the required DOM to be rendered
        await page.waitForSelector(Ticotek.productsName);
        // Retrieve all the cards that are available
        let cards = await page.$$eval(Ticotek.productsName, card=> card.map(c=> c.innerText.toLowerCase()))
        const cardMatches = getCardsMatches(cards)
        // Print results and send slack message
        const slackMessage = slackMessageParser.ticotek(cardMatches)
        sendSlackMessage(cardMatches, slackMessage)
        // Close page ( tab )
        await page.close()
    }
}

module.exports = scraperObject;