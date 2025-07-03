import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://demoqa.com', // <-- só o domínio
    headless: true,
    screenshot: 'only-on-failure',
  },
});
