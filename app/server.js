/**
 * Created by YOU on 2018/3/15.
 */

const Koa = require('koa2');
const KoaBodyParser = require('koa-bodyparser')
const routes = require('./routers')()
const config = require('./config')
const {responseHandler} = require('./utils')
const lodash = require('lodash')
require('./models')
const app = new Koa()
app.context.setBody = responseHandler
global._ = lodash
global._.hasAll = function (obj, checkKeys) {
  let keys = Object.keys(obj)
  for (let k of checkKeys) {
    if (keys.indexOf(k) === -1 || obj[k] === undefined) {
      return false
    }
  }
  return true
}
global._.hasOne = function (obj, checkKeys) {
  let keys = Object.keys(obj)
  for (let k of checkKeys) {
    if (keys.indexOf(k) !== -1 && obj[k] !== undefined) {
      return true
    }
  }
  return false
}

app.use(KoaBodyParser())
app.use(routes);

app.listen(config.port)
console.log(`server listening on port: ${config.port}`)