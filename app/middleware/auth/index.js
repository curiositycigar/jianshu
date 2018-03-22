/**
 * Created by YOU on 2018/3/19.
 */
const jwt = require('jsonwebtoken')
const {
  secret,
  expiresIn,
  tokenKey
} = require('../../config').auth


exports.authenticated = function (key = tokenKey) {
  return async (ctx, next) => {
    let token = ctx.cookies.get(key);
    if (token && jwt.verify(key, secret)) {
      // token校验通过
      ctx.state[key] = jwt.decode(token).data;
      await next()
    } else {
      //  没有权限
      ctx.throw(403)
    }
  }
}

exports.signToken = function (key = tokenKey) {
  return async (ctx, next) => {
    let token = jwt.sign(
      {data: ctx.state[key]},
      secret,
      {
        expiresIn: expiresIn,
      },
    );
    ctx.cookies.set(key, token);
    await next()
  };
}
