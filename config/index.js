'use strict'
const config = require('config')

const settings = config.get('Customer.settings')
const log4js = config.get('Customer.log4js')

const configs = {}

configs.settings = require(`./${settings}`)
configs.logConfig = require(`./${log4js}`)
// configs.settings = require('./settings')
configs.errorMsg = require('./error-message')
configs.successMsg = require('./success-message')
configs.errorSystem = require('./error-system')
configs.pageConfig = require('./pagesize')
configs.enum = require('./enum')
configs.router = require('./router.js')
configs.right = require('./right')

module.exports = configs
