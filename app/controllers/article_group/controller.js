/**
 * Created by YOU on 2018/3/27.
 */
const {
  createArticleGroup,
  getArticleGroupById,
  getArticleGroupsByAuthorId,
  updateArticleGroupById,
  deleteArticleGroupById
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

exports.updateArticleGroup = async (ctx, next) => {
  let {id, ...params} = ctx.query
  let query = {
    id: id,
    author_id: ctx.state[tokenKey].id
  }
  if (id && (params.name || params.description)) {
    let result = await updateArticleGroupById(query, params)
    ctx.body = ctx.setBody(result, '更新失败')
  } else {
    ctx.throw(400)
  }
}

exports.deleteArticleGroup = async (ctx, next) => {
  let params = ctx.query
  params.author_id = ctx.state[tokenKey].id
  if (params.id && params.author_id) {
    let result = await deleteArticleGroupById(params)
    ctx.body = ctx.setBody(result, '删除失败')
  } else {
    ctx.throw(400)
  }
}

exports.getArticleGroup = async (ctx, next) => {
  let id = ctx.query.id
  if (id) {
    let result = await getArticleGroupById(id)
    ctx.body = ctx.setBody(result, '获取失败')
  } else {
    ctx.throw(400)
  }
}

exports.getArticleGroups = async (ctx, next) => {
  let author_id = ctx.query.author_id || ctx.state[tokenKey].id
  if (author_id) {
    let result = await getArticleGroupsByAuthorId(author_id)
    ctx.body = ctx.setBody(result, '获取失败')
  } else {
    ctx.throw(400)
  }
}