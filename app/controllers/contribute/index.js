/**
 * Created by YOU on 2018/4/1.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createContribute);
router.get('/cancel', authenticated(), controller.deleteContribute);
router.get('/getPublic', authenticated(), controller.getContribute);
router.get('/getPrivate', authenticated(), controller.getMyContribute);
module.exports = router;