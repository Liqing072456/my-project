'use strict'
// Template version: 1.3.1
const path = require('path')
module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {        
        '/api': {
            target: 'http://localhost:3000/api/',
            changeOrigin: true,
            pathRewrite: {                
                '^/api': ''
            }
        }
    },
    cssSourceMap: false
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
