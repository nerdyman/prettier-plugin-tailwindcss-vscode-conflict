/**
 * @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindPrettierConfig
 * @type {TailwindPrettierConfig}
 */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 120,

  tailwindConfig: "./tailwind.config.cjs",
};
