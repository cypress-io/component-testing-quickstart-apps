import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
      webpackConfig: { stats: "errors-only" }, // see issue https://github.com/cypress-io/cypress/issues/26456
    },
    specPattern: "**/*.cy.ts",
  },
});
