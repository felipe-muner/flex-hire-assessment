import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://flex-hire-assessment.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
