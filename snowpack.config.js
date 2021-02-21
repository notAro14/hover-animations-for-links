/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  plugins: ['@snowpack/plugin-sass'],
  buildOptions: {
    out: 'dist',
  },
}
