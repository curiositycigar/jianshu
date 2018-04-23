/**
 * Created by YOU on 2018/4/17.
 */
const {
  FollowAuthor
} = require('../../models')

const createFollowAuthor = (params) => {
  params = _.pick(params, ['author_id', 'follow_author_id'])
  return FollowAuthor.create(params).then(data => data, err => err)
}

const deleteFollowAuthor = (query, field) => {
  query = _.pick(query, ['author_id', 'follow_author_id'])
  return FollowAuthor.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const getFollowAuthors = (query) => {
  query = _.pick(query, ['author_id', 'follow_author_id'])
  return FollowAuthor.findAll({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createFollowAuthor,
  deleteFollowAuthor,
  getFollowAuthors
}