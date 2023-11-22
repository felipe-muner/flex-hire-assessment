import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://flex-hire-assessment.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
