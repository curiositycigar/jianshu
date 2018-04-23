/**
 * Created by YOU on 2018/3/19.
 */
const {
  createAuthor,
  deleteAuthorById,
  validateAccount,
  getAuthorById,
  updateAuthorById,
  updateAuthorPasswordByIdPassword
} = require('../../service/author')

const {
  createBlackList,
  deleteBlackList,
  blacked,
  getBlackLists
} = require('../../service/blackList')

const {
  signToken
} = require('../../auth')

// 注册登录不需要权限
exports.doRegister = async (ctx, next) => {
  let params = ctx.query
  if (params.email && params.password) {
    let result = await createAuthor(params)
    ctx.body = ctx.setBody(result, '注册请求失败, 请稍后重试')
  } else {
    ctx.throw(400)
  }
}

exports.doLogin = async (ctx, next) => {
  let params = ctx.query
  if (params.email && params.password) {
    let result = await validateAccount(params)
    let body = ctx.setBody(result, '用户名或密码错误')
    if (!body.error) {
      signToken(ctx, body.data.toJSON())
    }
    ctx.body = body
  } else {
    ctx.throw(400)
  }
}

// 超级权限
exports.deleteAuthor = async (ctx, next) => {
  let query = _.pick(ctx.query, ['id', 'password'])
  let result = await deleteAuthorById('82691220-310d-11e8-be43-4101130e47aa')
  ctx.body = ctx.setBody(result)
}

// 获取个人信息
exports.getAuthorInfo = async (ctx, next) => {
  let result = await getAuthorById(ctx.state[tokenKey].id)
  ctx.body = ctx.setBody(result, '用户不存在')
}

exports.updateAuthorInfo = async (ctx, next) => {
  let params = _.pick(ctx.query, ['nick_name'])
  let id = ctx.state[tokenKey].id
  let result = await updateAuthorById(id, params)
  ctx.body = ctx.setBody(result, '用户不存在')
}

exports.changePassword = async (ctx, next) => {
  let params = _.pick(ctx.query, ['oldPassword', 'password'])
  let id = ctx.state[tokenKey].id
  let result = await updateAuthorPasswordByIdPassword(
    {
      id: '6faa2030-3099-11e8-9732-a9d43190195f',
      password: params.oldPassword
    },
    {password: params.password}
  )
  ctx.body = ctx.setBody(result, '密码验证失败')
}

/* 黑名单 */
exports.setBlack = async (ctx, next) => {
  let params = _.pick(ctx.query, ['black_id'])
  if (params.black_id) {
    let result = await createBlackList({
      author_id: ctx.state[tokenKey].id,
      black_id: params.black_id
    })
    ctx.body = ctx.setBody(result, '用户不存在')
  } else {
    ctx.throw(400)
  }
}

exports.dropBlack = async (ctx, next) => {
  let params = _.pick(ctx.query, ['black_id'])
  if (params.black_id) {
    let result = await deleteBlackList({
      author_id: ctx.state[tokenKey].id,
      black_id: params.black_id
    })
    ctx.body = ctx.setBody(result, '用户不存在')
  } else {
    ctx.throw(400)
  }
}

exports.getBlacks = async (ctx, next) => {
  let result = await getBlackLists({
    author_id: ctx.state[tokenKey].id
  })
  ctx.body = ctx.setBody(result)
}