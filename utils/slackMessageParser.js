const {
    extremeTech, intelec,
    techzilla, ticotek,
    pctodocr, faithTechnology
} = require('../utils/constants').urls

const cardsFound = (cards) => {
    return cards.map(card => {
        return {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `:coin: ${card}`
            }
        }
    })
}

exports.extremeTech = (cards) => {
    const cardsParsed = cardsFound(cards)

    const blocks = {
        blocks: [
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:department_store: EXTREMETECH*"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:moneybag::moneybag::moneybag:The following cards have been found:*"
                }
            },
            ...cardsParsed,
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Visit: ${extremeTech}\n:phone: 4001-4991 \n:phone: 4000-2224`
                }
            },
            {
                type: "divider"
            },
        ]
    }

    return blocks
}

exports.intelec = (cards) => {
    const cardsParsed = cardsFound(cards)

    const blocks = {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:department_store: INTELEC*"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:moneybag::moneybag::moneybag:The following cards have been found:*"
                }
            },
            ...cardsParsed,
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Visit: ${intelec} \n:phone: 2202-1200`
                }
            },
            {
                type: "divider"
            }
        ]
    }

    return blocks
}

exports.techzilla = (cards) => {
    const cardsParsed = cardsFound(cards)

    const blocks = {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:department_store: TECHZILLA*"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:moneybag::moneybag::moneybag:The following cards have been found:*"
                }
            },
            ...cardsParsed,
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Visit: ${techzilla}\n:phone: +506 4000 1834`
                }
            },
            {
                type: "divider"
            }
        ]
    }

    return blocks
}

exports.ticotek = (cards) => {
    const cardsParsed = cardsFound(cards)

    const blocks = {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:department_store: TICOTEK*"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:moneybag::moneybag::moneybag:The following cards have been found:*"
                }
            },
            ...cardsParsed,
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Visit: ${ticotek}\n:phone: +506 2261 1198`
                }
            },
            {
                type: "divider"
            }
        ]
    }

    return blocks
}

exports.pctodocr = (cards) => {
    const cardsParsed = cardsFound(cards)

    const blocks = {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:department_store: PCTODOCR*"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:moneybag::moneybag::moneybag:The following cards have been found:*"
                }
            },
            ...cardsParsed,
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Visit: ${pctodocr}\n:phone: +506 4702 3838`
                }
            },
            {
                type: "divider"
            }
        ]
    }

    return blocks
}

exports.faithTechnology = (cards) => {
    const cardsParsed = cardsFound(cards)

    const blocks = {
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:department_store: FAITH TECHNOLOGY*"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "*:moneybag::moneybag::moneybag:The following cards have been found:*"
                }
            },
            ...cardsParsed,
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Visit: ${faithTechnology}\n:phone: (+506) 6241-5721`
                }
            },
            {
                type: "divider"
            }
        ]
    }

    return blocks
}