/**
 * Created by YOU on 2018/4/1.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createContribute);
module.exports = router;