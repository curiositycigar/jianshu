/**
 * Created by YOU on 2018/4/1.
 */
const {
  Subject,
  Contribute
} = require('../../models')

// 通过专题id、获取专题收录文章id
const createContribute = (params) => {
  params = _.pick(params, ['article_id', 'subject_id', 'author_id'])
  return Contribute.create(params).then(data => data, err => err)
}

const deleteContribute = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return Subject.destroy(
    {
      where: query
    }
  ).then(data => data, err => err)
}

const updateContribute = (query, field) => {
  query = _.pick(query, ['id'])
  field = _.pick(field, ['access'])
  return Subject.update(
    field,
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const getContributes = (query) => {
  // (author_id, access)('access', 'subject_id')()
  query = _.pick(query, ['author_id', 'access', 'subject_id'])
  return Article.findAll({
    where: {
      ...query
    }
  }).then(data => data, err => err)
}

module.exports = {
  createContribute,
  deleteContribute,
  getContributes,
  updateContribute
}