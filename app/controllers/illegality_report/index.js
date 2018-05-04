/**
 * Created by YOU on 2018/5/4.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.create);
router.get('/delete', authenticated(), controller.delete);
router.get('/get', authenticated(), controller.getMine);

module.exports = router;
