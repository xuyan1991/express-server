'use strict'
const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: { type: String, required: 'name is required' },
  nickName: { type: String },
  password: { type: String },
  age: {type: Number, min: 18, max: 95},
  sex: { type: String, enum: ['male', 'female', 'unknow'] },
  address: String, // 大学或者公司
  phone: String, // 个人网站
  intruction: { type: String, default: '这个人很懒，什么都有没留下、、、' },
  avatar: { type: String, default: '/upload/images/defaultlogo.png' },
  role: {type: String, default: 'ordinary users'},
  currentAuthority: {type: String, default: 'admin'},
  lastLogin: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

UserSchema.set('toJSON', { getters: true, virtuals: true })
UserSchema.set('toObject', { getters: true, virtuals: true })

UserSchema.path('lastLogin').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
UserSchema.path('createdAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})
UserSchema.path('updatedAt').get(function (v) {
  return moment(v).format('YYYY-MM-DD HH:mm:ss')
})

UserSchema.statics = {
  findAge: async function (age) {
    const findRes = await this.find({age: age})
    return findRes
  }
}

module.exports = mongoose.model('Users', UserSchema)
