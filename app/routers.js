/**
 * Created by YOU on 2018/3/19.
 */
const router = require('koa-router')()

const author = require('./controllers/author')
const article = require('./controllers/article')
const articleGroup = require('./controllers/article_group')

module.exports = function () {
  router.use('/author', author.routes(), author.allowedMethods())
  router.use('/article', article.routes(), article.allowedMethods())
  router.use('/article-group', articleGroup.routes(), articleGroup.allowedMethods())
  return router.routes()
}