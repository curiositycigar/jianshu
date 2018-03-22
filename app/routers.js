/**
 * Created by YOU on 2018/3/19.
 */
const router = require('koa-router')()

const auth = require('./controllers/auth')
const author = require('./controllers/author')

module.exports = function () {
  router.use('/auth', auth.routes(), auth.allowedMethods())
  router.use('/author', author.routes(), author.allowedMethods())
  return router.routes()
}