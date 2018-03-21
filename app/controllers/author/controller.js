/**
 * Created by YOU on 2018/3/19.
 */

const Author = require('../../models').Author

Author.sync().then(function () {
  return Author.create({
    email: 'asda@163.com',
    password: '123213',
    sex: 0
  })
})

exports.getUserbaseInfo = async (ctx, next) => {
  ctx.body = {
    name: 'username'
  }
}