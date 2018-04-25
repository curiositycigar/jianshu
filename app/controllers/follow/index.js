/**
 * Created by YOU on 2018/4/23.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')
//  关注
router.get('/author', authenticated(), controller.followA);
router.get('/articleGroup', authenticated(), controller.followAG);
router.get('/subject', authenticated(), controller.followS);
// 取消关注
router.get('/disAuthor', authenticated(), controller.deleteA);
router.get('/disArticleGroup', authenticated(), controller.deleteAG);
router.get('/disSubject', authenticated(), controller.deleteS);
// 获取我的关注
router.get('/getAuthors', authenticated(), controller.getFollowedA);
router.get('/getArticleGroups', authenticated(), controller.getFollowedAG);
router.get('/getSubjects', authenticated(), controller.getFollowedS);
// 根据id获取用户、文集、专题的关注列表
router.get('/getByAuthor', controller.deleteA);
router.get('/getByArticleGroup', controller.deleteAG);
router.get('/getBySubject', controller.deleteS);

module.exports = router;
