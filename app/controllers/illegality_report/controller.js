/**
 * Created by YOU on 2018/5/4.
 */
const {
  createIllegalityReport,
  getIllegalityReport,
  getIllegalityReports,
  deleteIllegalityReport
} = require('../../service/illegality_report')

exports.create = async (ctx) => {
  let required = ['article_id', 'description']
  let params = _.pick(ctx.query, required)
  params.author_id = ctx.state[tokenKey].id
  if (_.hasAll(params, required)) {
    let result = createIllegalityReport(params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.delete = async (ctx) => {
  let required = ['id']
  let params = _.pick(ctx.query, required)
  params.author_id = ctx.state[tokenKey].id
  if (_.hasAll(params, required)) {
    let result = deleteIllegalityReport(params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.getOne = async (ctx) => {
  let required = ['id']
  let params = _.pick(ctx.query, required)
  if (_.hasAll(params, required)) {
    let result = getIllegalityReport(params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.getMine = async (ctx) => {
  let params = {
    author_id: ctx.state[tokenKey].id
  }
  ctx.body = ctx.setBody(getIllegalityReport(params))
}

exports.getAll = async (ctx) => {
  ctx.body = ctx.setBody(getIllegalityReports())
}
