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
                    text: "Visit: https://extremetechcr.com/tienda/18-tarjetas-de-video#/chip-nvidia\n:phone: 4001-4991 \n:phone: 4000-2224"
                }
            }
        ]
    }

    return blocks
}