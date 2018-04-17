/**
 * Created by YOU on 2018/4/17.
 */
const {
  FollowSubject
} = require('../../models')

const createFollowSubject = (params) => {
  params = _.pick(params, ['author_id', 'article_group_id'])
  return FollowSubject.create(params).then(data => data, err => err)
}

const deleteFollowSubject = (query, field) => {
  query = _.pick(query, ['author_id', 'article_group_id'])
  return FollowSubject.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const getFollowSubjects = (query) => {
  query = _.pick(query, ['author_id', 'article_group_id'])
  return FollowSubject.findAll({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createFollowSubject,
  deleteFollowSubject,
  getFollowSubjects
}