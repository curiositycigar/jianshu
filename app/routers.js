/**
 * Created by YOU on 2018/3/19.
 */
const router = require('koa-router')()

const author = require('./controllers/author')
const article = require('./controllers/article')

module.exports = function () {
  router.use('/author', author.routes(), author.allowedMethods())
  router.use('/article', article.routes(), article.allowedMethods())
  return router.routes()
}