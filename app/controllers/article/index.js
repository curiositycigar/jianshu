/**
 * Created by YOU on 2018/3/26.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createArticle);
router.get('/delete', authenticated(), controller.deleteArticle);
router.get('/update', authenticated(), controller.updateArticle);
router.get('/public', authenticated(), controller.changeArticleStatus);
router.get('/move', authenticated(), controller.moveArticle);
router.get('/getMine', authenticated(), controller.getMyArticles);
router.get('/getOthers', controller.getArticles);

module.exports = router;