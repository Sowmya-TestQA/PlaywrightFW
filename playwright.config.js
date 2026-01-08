// @ts-check
import { defineConfig, devices } from '@playwright/test';

export const config = ({
  testDir: './tests',
  timeout:15000, //global timeout 
  expect:{
    timeout:15000,//assertion timeout
  },
  reporter:[['html', {open: 'never'}]] ,
  use: {
    browserName:'chromium',
    headless:true,
    screenshot: 'on',
    trace:'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless:true },
    },


  ],

 
});

