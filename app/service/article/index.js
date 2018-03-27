/**
 * Created by YOU on 2018/3/26.
 */
const Article = require('../../models').Article

const createArticle = (params) => {
  params = _.pick(params, ['title', 'content', 'author_id', 'article_group_id'])
  return Article.create(params).then(data => data, err => err)
}

const updateArticleById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['title', 'content'])
  return Article.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

const moveArticleById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['article_group_id'])
  return Article.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

const updateArticleStatusById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['is_publish'])
  return Article.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

const deleteArticleById = (query, field) => {
  let id = query.id || query
  return Article.destroy(
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}


const getArticles = (query) => {
  query = _.pick(query, ['author_id', 'is_publish', 'article_group_id'])
  return Article.findAll({
    where: {
      ...query
    }
  }).then(data => data, err => err)
}

const getArticleById = (query) => {
  let id = query.id || query
  return Article.findById(id).then(data => data || {}, err => err)
}


module.exports = {
  createArticle,
  updateArticleById,
  moveArticleById,
  updateArticleStatusById,
  deleteArticleById,
  getArticles,
  getArticleById
}