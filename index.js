const { chromium } = require('playwright')

const MY_STREAM = 'https://www.twitch.tv/videos/1418859492';
// const MY_WEBSITE = 'https://mateo-alvarez.vercel.app/';

(async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(MY_STREAM)
  await page.screenshot({ path: 'screenshots/example.png' })

  await browser.close()
})()
