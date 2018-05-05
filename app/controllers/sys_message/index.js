/**
 * Created by YOU on 2018/5/4.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/delete', authenticated(), controller.delete);
router.get('/read', authenticated(), controller.read);
router.get('/getOne', authenticated(), controller.getOne);
router.get('/getAll', authenticated(), controller.getAll);

module.exports = router;
