/**
 * Created by YOU on 2018/3/22.
 */

const {
    createAuthor,
    validateAccount
} = require('../../service/auth')

exports.doRegister = async (ctx, next) => {
    let result = await createAuthor({
        email: 'test@mail.com',
        password: '123456'
    })
    ctx.body = ctx.state.parseBody(result)
}

exports.doLogin = async (ctx, next) => {
    let result = await validateAccount({
        email: 'test@mail.com',
        password: '123456'
    })
    ctx.body = ctx.state.parseBody(result, '用户名或密码错误')
}