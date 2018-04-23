/**
 * Created by YOU on 2018/4/23.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createComment);
router.get('/delete', authenticated(), controller.deleteComment);
router.get('/getMine', authenticated(), controller.getMyComments);
router.get('/get', authenticated(), controller.getComments);
router.get('/getOne', authenticated(), controller.getComment);

module.exports = router;