/**
 * Created by YOU on 2018/3/19.
 */
const {
  getAuthorById
} = require('../../service/author')

exports.getUserbaseInfo = async (ctx, next) => {
  let result = await getAuthorById('4025fc90-3048-11e8-8959-79e8953092b8')
  ctx.body = ctx.setBody(result)
}