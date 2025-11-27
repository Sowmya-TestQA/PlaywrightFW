// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  retries: 1,
  workers: 3, // for parallel execution
  timeout:15000, //global timeout 
  expect:{
    timeout:15000,//assertion timeout
  },
  reporter: 'html',
  projects: [
    {
    name : 'chrome',
    use: {
    browserName:'chromium',
    headless: false,
    viewport: {width:720, height:720}, // opens window in a customised size we want
    //...devices['BlackBerry Z30'], // devices used to conduct mobile testing emulating the same mobile
    screenshot: 'only-on-failure',
    video : 'retain-on-failure',
    trace:'retain-on-failure',
  }},

  {
    name : 'safari',
    use: {
    browserName:'webkit',
    headless:true,
    screenshot: 'on',
    ignoreHttpsErrors: true, // bypasses if the website throws any ssl certificate issues
    Permissions: ['geolocation'], // takes care of browser popup asking location and all.
    trace:'retain-on-failure',
  }}


  ],

 
});
module.exports = config;

