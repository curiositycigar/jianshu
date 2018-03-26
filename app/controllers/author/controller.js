/**
 * Created by YOU on 2018/3/19.
 */
const {
  createAuthor,
  deleteAuthorById,
  validateAccount,
  getAuthorById,
  updateAuthorById,
  updateAuthorPasswordByIdPassword,
  updateAuthorPasswordById
} = require('../../service/author')
const {
  tokenKey
} = require('../../config').auth

const {
  signToken
} = require('../../auth')


exports.doRegister = async (ctx, next) => {
  let result = await createAuthor({
    email: 'test@mail.com',
    password: '123456'
  })
  ctx.body = ctx.setBody(result)
}

exports.deleteAuthor = async (ctx, next) => {
  let result = await deleteAuthorById('82691220-310d-11e8-be43-4101130e47aa')
  ctx.body = ctx.setBody(result)
}

exports.doLogin = async (ctx, next) => {
  let result = await validateAccount({
    email: 'test@mail.com',
    password: '123456'
  })
  let body = ctx.setBody(result, '用户名或密码错误')
  if (!body.error) {
    signToken(ctx, body.data.toJSON())
  }
  ctx.body = body
}

exports.getAuthorInfo = async (ctx, next) => {
  let result = await getAuthorById(ctx.state[tokenKey].id)
  ctx.body = ctx.setBody(result, '用户不存在')
}

exports.updateAuthorInfo = async (ctx, next) => {
  let params = _.pick(ctx.query, ['nick_name'])
  let id = ctx.state[tokenKey] ? ctx.state[tokenKey].id : ''
  let result = await updateAuthorById(id, params)
  ctx.body = ctx.setBody(result, '用户不存在')
}

exports.changePassword = async (ctx, next) => {
  let params = _.pick(ctx.query, ['oldPassword', 'password'])
  let id = ctx.state[tokenKey] ? ctx.state[tokenKey].id : ''
  let result = await updateAuthorPasswordByIdPassword(
    {
      id: '6faa2030-3099-11e8-9732-a9d43190195f',
      password: params.oldPassword
    },
    {password: params.password}
  )
  ctx.body = ctx.setBody(result, '原始密码验证失败')
}