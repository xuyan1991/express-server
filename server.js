'use strict'
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const log4js = require('log4js')

const {logConfig, settings} = require('./config')
// const myutil = require('./app/myutil')

const routes = require('./app/routes') // 引入路由
// 日志配置
log4js.configure(logConfig)
let logger = log4js.getLogger()
global.logger = logger

// 配置静态文件
app.use(express.static(path.join(__dirname, 'app/public')))
// 配置apidoc
app.use('/apidoc', express.static(path.join(__dirname, 'app/public/apidoc/')))

// 连接数据库
// 将mongoose自身的promise替代为ES6的promise
mongoose.Promise = global.Promise
// MongoDB升级到4.0之后，需要加useNewUrlParser参数和useCreateIndex参数
mongoose.connect(settings.dbConfig.URL, { useNewUrlParser: true, useCreateIndex: true })
mongoose.set('debug', settings.mongooseDebug)

// 请求体解析中间件
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// // 对res的扩展
// app.use(myutil.resExtend)

// 跨域配置
app.use(cors())

// 注册路由
routes(app)
app.listen(settings.port)
logger.info(`start:port is ${settings.port}`)

module.exports = app
