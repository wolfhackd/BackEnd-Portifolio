import type { Config } from "jest";
import dotenv from "dotenv";

// Carrega o .env.test antes de exportar a config
dotenv.config({ path: ".env.test" });

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],

  transform: {
    // Configuração correta para evitar o Warning de 'globals'
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  testMatch: ["**/__tests__/**/*.test.ts"],
  clearMocks: true,
};

export default config;
