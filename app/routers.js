/**
 * Created by YOU on 2018/3/19.
 */
const router = require('koa-router')()

const author = require('./controllers/author')

module.exports = function () {
  router.use('/author', author.routes(), author.allowedMethods())
  return router.routes()
}