/**
 * Created by YOU on 2018/3/19.
 */
const jwt = require('jsonwebtoken')
const secret = 'srcret'


exports.authenticated = function (power) {
  return async (ctx, next) => {
    let token = ctx.cookies.get('token');
    if (token && jwt.verify(token, secret)) {
      // token校验通过
      ctx.state.tokenData = jwt.decode(token).data;
      if (power !== undefined) {
        if (power === ctx.state.user.power) {
          await next()
        } else {
          ctx.throw(403)
        }
      }
      return await
        next()
    } else {
      //  没有权限
      ctx.throw(403)
    }
  }
}

exports.setToken = function (responseData) {
  return async (ctx, next) => {
    let token = jwt.sign(
      {data: ctx.state.tokenData},
      secret,
      {
        expiresIn: expiresIn,
      },
    );
    ctx.cookies.set('token', token);
    ctx.response.body = responseData || {
        status: true,
        data: 'success'
      }
  };
}
