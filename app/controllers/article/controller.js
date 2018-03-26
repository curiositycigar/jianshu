/**
 * Created by YOU on 2018/3/26.
 */

const {
  createAuthor,
  validateAccount
} = require('../../service/')

exports.doRegister = async (ctx, next) => {
  let params = _.pick(ctx.query, ['email', 'password'])
  let result = await createAuthor(params)
  ctx.body = ctx.setBody(result)
}

exports.doLogin = async (ctx, next) => {
  let params = _.pick(ctx.query, ['email', 'password'])
  let result = await validateAccount(params)
  ctx.body = ctx.setBody(result, '用户名或密码错误')
}