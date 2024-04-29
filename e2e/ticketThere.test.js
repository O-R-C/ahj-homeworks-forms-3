import puppeteer from 'puppeteer'

jest.setTimeout(600000)

describe('test', () => {
  let browser
  let page
  let app
  let btnSubmit
  let inputThere
  let inputReturn
  let wrapperReturn

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 300,
      devtools: true,
    })

    page = await browser.newPage()
    await page.goto('http://localhost:8080')

    app = await page.$('[class*="app"]')
    btnSubmit = await app.$('[class*="btn-submit"]')
    inputThere = await app.$('[name="date-there"]')
    inputReturn = await app.$('[name="date-return"]')
    wrapperReturn = await app.$('[class*="checkbox-wrapper"]')
  })

  test('current date', async () => {
    await btnSubmit.click()
    await app.waitForSelector('dialog[class*="ticket"]')
  })

  test('set date', async () => {
    await inputThere.type('30082024')
    await btnSubmit.click()
    await app.waitForSelector('dialog[class*="ticket"]')
  })

  test('only there', async () => {
    await inputThere.type('30082024')
    await wrapperReturn.click()
    await inputReturn.type('1509')
    await wrapperReturn.click()
    await btnSubmit.click()
    await app.waitForSelector('dialog[class*="ticket"]')
  })

  afterEach(async () => {
    await browser.close()
  })
})
