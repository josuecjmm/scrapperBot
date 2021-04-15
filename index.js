require('dotenv').config()
const browserObject = require('./browser');
const scraperController = require('./pageController');
const Cronjob = require('cron').CronJob


//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser()

// Pass the browser instance to the scraper controller
const job = new Cronjob('*/1 * * * *', () => {
    scraperController(browserInstance)
}, null, true, 'America/Costa_Rica')

job.start();