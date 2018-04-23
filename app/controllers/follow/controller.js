/**
 * Created by YOU on 2018/4/23.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createComment);

module.exports = router;