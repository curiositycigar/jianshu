/**
 * Created by YOU on 2018/4/1.
 */
const {
  createSubject,
  getSubjectById,
  getSubjectsByAuthorId,
  deleteSubject,
  updateSubject
} = require('../../service/subject')

exports.createSubject = async (ctx, next) => {
  let params = _.pick(ctx.query, ['name', 'description'])
  params.author_id = ctx.state[tokenKey].id
  if (params.name && params.description && params.author_id) {
    let result = createSubject(params)
    ctx.body = ctx.setBody(result, '创建失败')
  } else {
    ctx.throw(400)
  }
}

exports.deleteSubject = async (ctx, next) => {
  let params = ctx.query
  params.author_id = ctx.state[tokenKey].id
  if (params.id && params.author_id) {
    let result = await deleteSubject(params)
    ctx.body = ctx.setBody(result, '删除失败')
  } else {
    ctx.throw(400)
  }
}


exports.updateSubject = async (ctx, next) => {
  let {id, ...params} = ctx.query
  let query = {
    id: id,
    author_id: ctx.state[tokenKey].id
  }
  if (id && (params.name || params.description)) {
    let result = await updateSubject(query, params)
    ctx.body = ctx.setBody(result, '更新失败')
  } else {
    ctx.throw(400)
  }
}

exports.subjectSetting = async (ctx, next) => {
  let {id, ...params} = ctx.query
  let query = {
    id: id,
    author_id: ctx.state[tokenKey].id
  }
  if (id && params.should_audit) {
    let result = await updateSubject(query, params)
    ctx.body = ctx.setBody(result, '配置失败')
  } else {
    ctx.throw(400)
  }
}

exports.getSubjects = async (ctx, next) => {
  let params = ctx.query
  if (params && params.author_id) {
    let result = await getSubjectsByAuthorId(params.author_id)
    ctx.body = ctx.setBody(result, '用户不存在')
  } else if (ctx.state[tokenKey] && ctx.state[tokenKey].id) {
    let result = await getSubjectsByAuthorId(ctx.state[tokenKey].id)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.getSubject = async (ctx, next) => {
  let id = ctx.query.id
  if (id) {
    let result = await getSubjectById(id)
    ctx.body = ctx.setBody(result, '专题不存在')
  } else {
    ctx.throw(400)
  }
}