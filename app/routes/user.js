'use strict'

const Controllers = require('../controllers')

module.exports = (app) => {
  app.route('/currentUser')
    .get(Controllers.users.currentUser)
  app.route('/user')
    .get(Controllers.users.list)
  app.route('/user/:_id')
    .get(Controllers.users.detail)
    .put(Controllers.users.update)
    .delete(Controllers.users.destroy)
}
