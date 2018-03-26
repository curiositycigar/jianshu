/**
 * Created by YOU on 2018/3/19.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/register', controller.doRegister);
router.get('/login', controller.doLogin);
router.get('/info', authenticated(), controller.getAuthorInfo);
router.get('/update', authenticated(), controller.updateAuthorInfo);
router.get('/changePassword', authenticated(), controller.changePassword);

module.exports = router;