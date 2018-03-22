/**
 * Created by YOU on 2018/3/22.
 */
const router = require('koa-router')();
const controller = require('./controller');
const authService = require('../../middleware/auth');

router.get('/register', controller.doRegister);
router.get('/login', controller.doLogin);
router.get('/logout', controller.doLogout);

module.exports = router;