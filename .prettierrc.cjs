/**
 * @typedef {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} ImportOrderPrettierConfig
 * @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindPrettierConfig
 * @type {ImportOrderPrettierConfig & TailwindPrettierConfig}
 */
module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  printWidth: 120,
  importOrder: [
    "<BUILTIN_MODULES>", // Node.js built-ins level
    "",
    "<THIRD_PARTY_MODULES>", // npm level
    "",
    "^@/(.*)$", // project level
    "",
    "^[./]", // local level
  ],
  tailwindConfig: "./tailwind.config.cjs",
};
