import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts}",
    supportFile: false,
    video: false,
  },
  component: {
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
