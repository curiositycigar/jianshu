/**
 * Created by YOU on 2018/5/4.
 */
const {
  createSysMessage,
  deleteSysMessage,
  updateSysMessage,
  getSysMessage,
  getSysMessageById,
  getSysMessages
} = require('../../service/sys_message')

// 系统调用
exports.create = async (params) => {
  // message_type
  let required = ['author_id', 'content', 'link']
  params = _.pick(params, [...required, 'message_type'])
  if (_.hasAll(params, required)) {
    return ctx.setBody(await createSysMessage(params))
  } else {
    return ctx.setBody(null, required.join(',') + ' is required!')
  }
}

exports.delete = async (ctx, next) => {
  let required = ['id']
  let params = _.pick(ctx.query, required)
  params.author_id = ctx.state[tokenKey].id
  if (_.hasAll(params, required)) {
    return ctx.setBody(await deleteSysMessage(params))
  } else {
    ctx.throw(400)
  }
}

exports.read = async (ctx, next) => {
  let required = ['id', 'is_read']
  let params = _.pick(ctx.query, required)
  if (_.hasAll(params, required)) {
    let query = {
      id: params['id'],
      author_id: ctx.state[tokenKey].id
    }
    let field = {
      is_read: params['is_read']
    }
    return ctx.setBody(await updateSysMessage(query, field))
  } else {
    ctx.throw(400)
  }
}

exports.getOne = async (ctx, next) => {
  let required = ['id']
  let query = _.pick(ctx.query, required)
  query.author_id = ctx.state[tokenKey].id
  if (_.hasAll(query, required)) {
    return ctx.setBody(await getSysMessage(query))
  } else {
    ctx.throw(400)
  }
}

exports.getAll = async (ctx, next) => {
  return ctx.setBody(await getSysMessages({
    author_id: ctx.state[tokenKey].id
  }))
}
