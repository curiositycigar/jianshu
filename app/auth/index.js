/**
 * Created by YOU on 2018/3/19.
 */
const jwt = require('jsonwebtoken')
const {
  secret,
  expiresIn,
  tokenKey
} = require('../config').auth

const key = tokenKey

const authenticated = function () {
  return async (ctx, next) => {
    let token = ctx.cookies.get(key);
    if (token && jwt.verify(token, secret)) {
      // token校验通过
      ctx.state[key] = jwt.decode(token);
      await next()
    } else {
      //  没有权限
      ctx.throw(403)
    }
  }
}

const signToken = function (ctx, data) {
  let token = jwt.sign(
    data,
    secret,
    {
      expiresIn: expiresIn,
    },
  );
  ctx.cookies.set(key, token);
}

const unSignToken = function () {
  return async (ctx, next) => {
    let token = jwt.sign(
      {data: ''},
      secret,
      {
        expiresIn: 0,
      },
    );
    ctx.cookies.set(key, token);
    await next()
  };
}

module.exports = {
  authenticated,
  signToken,
  unSignToken
}