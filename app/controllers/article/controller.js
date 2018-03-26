/**
 * Created by YOU on 2018/3/26.
 */

const {
  createArticle,
  deleteArticleById
} = require('../../service/article')

const {
  tokenKey
} = require('../../config').auth

exports.createArticle = async (ctx, next) => {
  let params = _.pick(ctx.query, ['title', 'content'])
  let result = await createArticle(params)
  ctx.body = ctx.setBody(result)
}

exports.deleteArticle = async (ctx, next) => {
  let params = _.pick(ctx.query, ['id', 'password'])
  params = {
    id: ctx.query.id,
    author_id: ctx.state[tokenKey].id
  }
  let result = await deleteArticleById(params)
  ctx.body = ctx.setBody(result, '用户名或密码错误')
}