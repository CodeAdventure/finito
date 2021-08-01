module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
        rootMode: "upward",
      },
    ],
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["js", "svelte", "ts", "d.ts"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
