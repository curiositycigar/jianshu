/**
 * Created by YOU on 2018/4/1.
 */
const router = require('koa-router')();
const controller = require('./controller');
const {
  authenticated
} = require('../../auth')

router.get('/create', authenticated(), controller.createSubject);
router.get('/delete', authenticated(), controller.deleteSubject);
router.get('/update', authenticated(), controller.updateSubject);
router.get('/setting', authenticated(), controller.subjectSetting);
router.get('/getOne', authenticated(), controller.getSubject);
router.get('/getByAuthor', authenticated(), controller.getSubjects);
module.exports = router;