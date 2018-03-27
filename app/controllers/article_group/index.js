/**
 * Created by YOU on 2018/3/27.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createArticleGroup);
module.exports = router;