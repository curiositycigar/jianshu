/**
 * Created by YOU on 2018/3/22.
 */
const router = require('koa-router')();
const controller = require('./controller');
const authService = require('../../service/auth');

// router.get('/save', authService.authenticated(), controller.getUserbaseInfo);

module.exports = router;