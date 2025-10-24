const { defineConfig } = require('@vue/cli-service');

module.exports = {
  publicPath: '/',  // Root path for custom domain
  assetsDir: 'assets',         // Explicit assets folder
  filenameHashing: false,       // Temporary fix for cache issues
  productionSourceMap: false,

  // Add this for better asset handling
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].minify = false; // Disable HTML minification for debugging
      return args;
    });
  }
}