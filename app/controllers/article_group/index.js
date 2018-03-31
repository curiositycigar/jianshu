/**
 * Created by YOU on 2018/3/27.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createArticleGroup);
router.get('/delete', authenticated(), controller.deleteArticleGroup);
router.get('/update', authenticated(), controller.updateArticleGroup);
router.get('/info', authenticated(), controller.getArticleGroup);
router.get('/all', authenticated(), controller.getArticleGroups);
module.exports = router;