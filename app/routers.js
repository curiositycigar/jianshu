/**
 * Created by YOU on 2018/3/19.
 */
const router = require('koa-router')()

const author = require('./controllers/author')
const article = require('./controllers/article')
const articleGroup = require('./controllers/article_group')
const Subject = require('./controllers/subject')
const Contribute = require('./controllers/contribute')
const Follow = require('./controllers/follow')
const Comment = require('./controllers/comment')

module.exports = function () {
  router.use('/author', author.routes(), author.allowedMethods())
  router.use('/article', article.routes(), article.allowedMethods())
  router.use('/article-group', articleGroup.routes(), articleGroup.allowedMethods())
  router.use('/subject', Subject.routes(), Subject.allowedMethods())
  router.use('/contribute', Contribute.routes(), Contribute.allowedMethods())
  router.use('/comment', Comment.routes(), Comment.allowedMethods())
  router.use('/follow', Follow.routes(), Follow.allowedMethods())
  return router.routes()
}