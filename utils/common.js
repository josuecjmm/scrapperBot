const {possibleCards}  = require('../utils/constants')
const axios = require('../utils/axios')
const {SLACK_BOT_HOOK} = process.env

exports.getCardsMatches = (cards) => {
    let cardMatches = [];
    cards.forEach(c => {
        possibleCards.forEach(p => {
            const regex = new RegExp(p,'g')
            const matches = c.match(regex)
            if(matches && matches.length > 0) cardMatches.push(c)
        })
    })
    return cardMatches
}

exports.sendSlackMessage = async (cardMatches, slackMessage) => {
    if (cardMatches.length > 0) {
        console.log('The cards available are: ', cardMatches)
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
}