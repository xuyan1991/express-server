'use strict'
const controllers = {}
controllers.users = require('./users')
controllers.category = require('./category')
controllers.article = require('./article')
controllers.test = require('./test')
controllers.fakeData = require('./fakeData')
module.exports = controllers
