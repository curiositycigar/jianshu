/**
 * Created by YOU on 2018/4/17.
 */
const {
  FollowArticleGroup
} = require('../../models')

const createFollowArticleGroup = (params) => {
  params = _.pick(params, ['author_id', 'article_group_id'])
  return FollowArticleGroup.create(params).then(data => data, err => err)
}

const deleteFollowArticleGroup = (query, field) => {
  query = _.pick(query, ['author_id', 'article_group_id'])
  return FollowArticleGroup.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const getFollowArticleGroups = (query) => {
  query = _.pick(query, ['author_id', 'article_group_id'])
  return FollowArticleGroup.findAll({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createFollowArticleGroup,
  deleteFollowArticleGroup,
  getFollowArticleGroups
}