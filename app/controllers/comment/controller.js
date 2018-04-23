/**
 * Created by YOU on 2018/4/23.
 */
const {
  createComment,
  deleteComment,
  getComment,
  getComments
} = require('../../service/comment')

const {
  getArticle
} = require('../../service/article')

exports.createComment = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['article_id', 'content']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await createComment(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.deleteComment = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await deleteComment(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.getMyComments = async (ctx, next) => {
  let result = await getComments({
    author_id: ctx.state[tokenKey].id
  })
  ctx.body = ctx.setBody(result)
}

exports.getComments = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['article_id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await getComments(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.getComment = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await getComment(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}