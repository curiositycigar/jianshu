/**
 * Created by YOU on 2018/3/26.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createArticle);

module.exports = router;