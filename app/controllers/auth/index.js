/**
 * Created by YOU on 2018/3/22.
 */
const router = require('koa-router')();
const controller = require('./controller');
const authService = require('../../middleware/auth');

router.post('/login', controller.doLogin);
router.get('/logout', controller.doLogout);

module.exports = router;