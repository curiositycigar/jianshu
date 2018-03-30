/**
 * Created by YOU on 2018/3/26.
 */

const {
  createArticle,
  updateArticleById,
  moveArticleById,
  updateArticleStatusById,
  deleteArticleById,
  getArticles,
  getArticle
} = require('../../service/article')

const {
  tokenKey
} = require('../../config').auth

exports.createArticle = async (ctx, next) => {
  let params = ctx.query
  params.author_id = ctx.state[tokenKey].id
  if (params.title && params.content && params.article_group_id) {
    let result = await createArticle(params)
    ctx.body = ctx.setBody(result, '新建文章失败 ,请稍后再试')
  } else {
    ctx.throw(400)
  }
}

exports.deleteArticle = async (ctx, next) => {
  let params = ctx.query
  if (params.id) {
    let result = await deleteArticleById(params)
    ctx.body = ctx.setBody(result, '文章不存在')
  } else {
    ctx.throw(400)
  }
}
// 获取自己文章（传入文集id或不传）
exports.getMyArticle = async (ctx, next) => {
  let params = _.pick(ctx.query, ['id'])
  params.author_id = ctx.state[tokenKey].id
  // 自己的文章，不用判断is_publish
  let result = await getArticle(params)
  ctx.body = ctx.setBody(result,)
}
// 获取其他用户文章（根据文集id或用户id或不传）
exports.getArticle = async (ctx, next) => {
  let params = _.pick(ctx.query, ['id', 'author_id'])
  params.is_publish = true
  // 自己的文章，不用判断is_publish
  let result = await getArticle(params)
  ctx.body = ctx.setBody(result,)
}

exports.updateArticle = async (ctx, next) => {
  let query = _.pick(params, ['id'])
  let params = _.pick(params, ['title', 'content'])
  query.author_id = ctx.state[tokenKey].id
  if (query.id && params.title && params.content) {
    let result = updateArticleById(query, params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}