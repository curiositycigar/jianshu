/**
 * Created by YOU on 2018/3/27.
 */
const {
  createArticleGroup,
  updateArticleGroupById
} = require('../../service/article_group')

exports.createArticleGroup = async (ctx, next) => {
  let params = ctx.query
  params.author_id = ctx.state[tokenKey].id
  if (params.name && params.description && params.author_id) {
    let result = await createArticleGroup(params)
    ctx.body = ctx.setBody(result, '新建文集失败 ,请稍后再试')
  } else {
    ctx.throw(400)
  }
}