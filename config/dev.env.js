'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const keys = require('../keys')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: keys.dev,
})
