/**
 * Created by YOU on 2018/3/19.
 */
const router = require('koa-router')();
const controller = require('./controller');
const authService = require('../../middleware/auth');

router.get('/info', controller.getUserbaseInfo);

module.exports = router;