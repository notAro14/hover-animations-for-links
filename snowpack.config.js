/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  plugins: ['@snowpack/plugin-sass'],
  buildOptions: {
    out: 'dist',
  },
  exclude: [
    '**/node_modules/**/*',
    'LICENSE',
    'yarn.lock',
    'snowpack.config.js',
    'README.md',
    'package.json',
    '.gitignore',
  ],
}
