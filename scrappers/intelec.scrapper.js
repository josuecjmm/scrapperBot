const slackMessageParser = require('../utils/slackMessageParser')
const axios = require('../utils/axios')
const Intelec = require('../pageObjects/intelec')
const {intelec} = require('../utils/constants').urls
const {possibleCards}  = require('../utils/constants')
const {SLACK_BOT_HOOK} = process.env
const {getCardsMatches, sendSlackMessage} = require('../utils/common')

const scraperObject = {

    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${intelec}...`);
        // Navigate to the selected page
        await page.goto(intelec);
        // Wait for the required DOM to be rendered
        await page.waitForSelector(Intelec.productsName);
        // Retrieve all the cards that are available
        let cards = await page.$$eval(Intelec.productsName, card=> card.map(c=> c.innerText.toLowerCase()))
        const cardMatches = getCardsMatches(cards)
        // Print results and send slack message
        const slackMessage = slackMessageParser.intelec(cardMatches)
        sendSlackMessage(cardMatches, slackMessage)
        // Close page ( tab )
        await page.close()
    }
}

module.exports = scraperObject;