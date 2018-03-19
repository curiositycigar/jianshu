/**
 * Created by YOU on 2018/3/19.
 */

exports.authenticated = function (power) {
  return async (ctx, next) => {
    await next()
  }
}