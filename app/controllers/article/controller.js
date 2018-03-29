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
// 获取其他用户文章（根据文集id或用户id或不传）