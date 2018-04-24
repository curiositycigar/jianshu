/**
 * Created by YOU on 2018/4/23.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/followAuthor', authenticated(), controller.followA);
router.get('/followArticleGroup', authenticated(), controller.followAG);
router.get('/followSubject', authenticated(), controller.followS);

router.get('/unFollowAuthor', authenticated(), controller.deleteA);
router.get('/unFollowArticleGroup', authenticated(), controller.deleteAG);
router.get('/unFollowSubject', authenticated(), controller.deleteS);

module.exports = router;
