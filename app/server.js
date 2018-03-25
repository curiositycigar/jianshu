/**
 * Created by YOU on 2018/3/15.
 */

const Koa = require('koa2');
const KoaBodyParser = require('koa-bodyparser')
const routes = require('./routers')()
const config = require('./config')
const responseHandler = require('./utils').responseHandler
require('./models')
const app = new Koa()
app.context.setBody = responseHandler

app.use(KoaBodyParser())
app.use(routes);

app.listen(config.port)
console.log(`server listening on port: ${config.port}`)