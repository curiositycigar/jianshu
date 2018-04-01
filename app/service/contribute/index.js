/**
 * Created by YOU on 2018/4/1.
 */
const {
  Subject,
  Contribute
} = require('../../models')

// 通过专题id、获取专题收录文章id
const createContribute = (params) => {
  params = _.pick(params, ['article_id', 'subject_id'])
  return Contribute.create(params).then(data => data, err => err)
}
