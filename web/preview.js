const puppeteer = require('puppeteer');
const bs = require("browser-sync").create();
const bs_port = 4000

// Start a Browsersync proxy
bs.init({
  proxy: "http://localhost",
  port: bs_port,
  open: false,
  files: [
    "htdocs/assets/**/*.js",
    "htdocs/assets/**/*.css",
    "htdocs/**/*.html",
    "htdocs/**/*.php",
  ]
});

// fullscreen preview
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    appMode: true,
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:'+ bs_port);
  await page.setViewport({
    width: 0,
    height: 0,
  });
})();