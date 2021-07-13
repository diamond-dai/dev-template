const puppeteer = require('puppeteer');
const bs = require("browser-sync").create();
const bs_port = 4000

// Start a Browsersync proxy
bs.init({
  proxy: "http://localhost",
  port: bs_port,
  open: false,
  files: [
    "themes/**",
    "htdocs/**",
  ]
});

// fullscreen preview
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-fullscreen', '--kiosk', '--disable-infobars', '--disable-session-crashed-bubble', '--noerrdialogs'],
    appMode: true,
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:'+ bs_port);
  await page.setViewport({
    width: 0,
    height: 0,
  });
})();