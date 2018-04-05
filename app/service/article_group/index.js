/**
 * Created by YOU on 2018/3/27.
 */
const ArticleGroup = require('../../models').ArticleGroup

const createArticleGroup = (params) => {
  params = _.pick(params, ['name', 'description', 'author_id'])
  return ArticleGroup.create(params).then(data => data, err => err)
}

const getArticleGroupById = (query) => {
  let id = query.id || query
  return ArticleGroup.findById(id).then(data => data, err => err)
}

const getArticleGroupsByAuthorId = (query) => {
  let author_id = query.author_id || query
  return ArticleGroup.findAll({
    where: {
      author_id: author_id
    }
  }).then(data => data, err => err)
}

const updateArticleGroupById = (query, field) => {
  query = _.pick(query, ['id', 'author_id'])
  field = _.pick(field, ['name', 'description'])
  return ArticleGroup.update(
    field,
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const deleteArticleGroupById = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return ArticleGroup.destroy(
    {
      where: query
    }
  ).then(data => data, err => err)
}
module.exports = {
  createArticleGroup,
  getArticleGroupById,
  getArticleGroupsByAuthorId,
  updateArticleGroupById,
  deleteArticleGroupById
}