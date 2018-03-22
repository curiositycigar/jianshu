/**
 * Created by YOU on 2018/3/22.
 */

const {
  createAuthor,
  validateAccount
} = require('../../service/auth')

exports.doRegister = async (ctx, next) => {

}

exports.doLogin = async (ctx, next) => {
  ctx.body = await createAuthor({
    email: 'test@mail.com',
    password: '123456'
  })
}

exports.doLogout = async (ctx, next) => {

}