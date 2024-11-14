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
    
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: {
      mode: 'on-first-retry',
      size: { width: 640, height: 480 }
    }
  },

  projects: [
    {
      name: 'chromium',
      use: {
         headless:false,
        ...devices['Desktop Chrome'] 
      },
      
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    
  ],

 
});
