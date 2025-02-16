import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 30000,

  use: {
    
    trace: 'on',
    screenshot: 'only-on-failure',
    video: {
      mode: 'retain-on-failure',
      size: { width: 720, height: 720}
    }
  },

  projects: [
    {
      name: 'chromium',
      use: {
         headless:true,
         ignoreHTTPSErrors:true,
        ...devices['Desktop Chrome'] 
      },
      
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],

 
});
