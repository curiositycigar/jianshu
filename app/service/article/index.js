/**
 * Created by YOU on 2018/3/26.
 */
const {
  Article
} = require('../../models')

const createArticle = (params) => {
  params = _.pick(params, ['title', 'content', 'author_id', 'article_group_id'])
  return Article.create(params).then(data => data, err => err)
}

const updateArticleById = (query, field) => {
  query = _.pick(query, ['id', 'author_id'])
  field = _.pick(field, ['title', 'content', 'article_group_id', 'is_publish'])
  return Article.update(
    field,
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const deleteArticleById = (query, field) => {
  query = _.pick(query, ['id', 'author_id'])
  return Article.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}


const getArticles = (query) => {
  // 根据author_id传入is_publish
  query = _.pick(query, ['author_id', 'is_publish', 'article_group_id'])
  return Article.findAll({
    where: {
      ...query
    }
  }).then(data => data, err => err)
}

const getArticle = (query) => {
  query = _.pick(query, ['id', 'author_id', 'is_publish'])
  return Article.findOne({
    where: query
  }).then(data => data, err => err)
}


module.exports = {
  createArticle,
  updateArticleById,
  deleteArticleById,
  getArticles,
  getArticle
}