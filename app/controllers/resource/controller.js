/**
 * Created by YOU on 2018/5/4.
 */
const {
  createResource,
  deleteResource,
  getResource
} = require('../../service/resource')


// 文件上传
exports.create = async (ctx, next) => {
  let required = ['resource_url', 'resource_type']
  let params = _.pick(ctx.query, required)
  params.author_id = ctx.state[tokenKey].id
  if (_.hasAll(params, required)) {
    ctx.body = ctx.setBody(createResource(params))
  } else {
    ctx.throw(400)
  }
}

exports.delete = async (ctx, next) => {

}

exports.get = async (ctx, next) => {

}
