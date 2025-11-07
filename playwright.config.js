// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  timeout:15000, //global timeout 
  expect:{
    timeout:15000,//assertion timeout
  },
  reporter: 'html',
  use: {
    browserName:'chromium',
    headless:false,
    screenshot: 'on',
    trace:'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },


  ],

 
});
module.exports = config;

