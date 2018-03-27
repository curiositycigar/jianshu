/**
 * Created by YOU on 2018/3/19.
 */
const jwt = require('jsonwebtoken')
const {
  secret,
  expiresIn,
  tokenKey
} = require('../config').auth

let key = tokenKey
global.tokenKey = tokenKey

const authenticated = function () {
  return async (ctx, next) => {
    let token = ctx.cookies.get(key)
    try {
      ctx.state[key] = jwt.verify(token, secret)
      // console.log(ctx.state[key])
      await next()
    } catch (e) {
      console.log(e)
      ctx.throw(403)
    }
  }
}

const signToken = function (ctx, data) {
  console.log(new Date(Date.now()).toLocaleString())
  let token = jwt.sign(
    data,
    secret,
    {
      expiresIn: expiresIn,
    }
  )
  ctx.cookies.set(key, token, {
    expires: new Date(Date.now() + expiresIn * 1000)
  })
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