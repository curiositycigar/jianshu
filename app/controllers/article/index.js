/**
 * Created by YOU on 2018/3/26.
 */
const router = require('koa-router')();
const controller = require('./controller');

router.get('/register', controller.doRegister);
router.get('/login', controller.doRegister);

module.exports = router;