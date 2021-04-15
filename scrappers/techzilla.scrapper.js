const slackMessageParser = require('../utils/slackMessageParser')
const axios = require('../utils/axios')
const Techzilla = require('../pageObjects/techzilla')
const {techzilla} = require('../utils/constants').urls
const {possibleCards}  = require('../utils/constants')
const {SLACK_BOT_HOOK} = process.env

const scraperObject = {

    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${techzilla}...`);
        // Navigate to the selected page
        await page.goto(techzilla);
        // Wait for the required DOM to be rendered
        await page.waitForSelector(Techzilla.productsName);

        // Retrieve all the cards that are available
        let cards = await page.$$eval(Techzilla.productsName, card=> card.map(c=> c.innerText.toLowerCase()))
        let cardMatches = [];
        cards.forEach(c => {
            possibleCards.forEach(p => {
                const regex = new RegExp(p,'g')
                const matches = c.match(regex)
                if(matches && matches.length > 0) cardMatches.push(c)
            })
        })

        // Print results and send slack message
        if (cardMatches.length > 0) {
            console.log('The cards available are: ', cardMatches)
            const slackMessage = slackMessageParser.techzilla(cardMatches)
            try {
                await axios.post(
                    SLACK_BOT_HOOK,
                    slackMessage
                )
            } catch (e) {
                console.log('Error creating slack message: ', console.log(e))
            }
        } else {
            console.log('No cards found at the moment :( !')
        }

        // Close page ( tab )
        await page.close()
    }
}

module.exports = scraperObject;