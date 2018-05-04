/**
 * Created by YOU on 2018/5/4.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.create);

module.exports = router;
