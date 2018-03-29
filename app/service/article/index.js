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
  // 根据author_id传入is_publish
  query = _.pick(query, ['author_id', 'is_publish', 'article_group_id'])
  return Article.findAll({
    where: {
      ...query
    }
  }).then(data => data, err => err)
}

const getArticle = (query) => {
  // 有用户id查找所有，没有用户id查找is_publish:true
  query = _.pick(query, ['id', 'author_id'])
  if (query.author_id) {
    return Article.findAll({
      where: query
    }).then(data => data || {}, err => err)
  } else {
    return Article.findAll({
      where: {
        id: query.id,
        is_publish: true
      }
    }).then(data => data || {}, err => err)
  }
}


module.exports = {
  createArticle,
  updateArticleById,
  moveArticleById,
  updateArticleStatusById,
  deleteArticleById,
  getArticles,
  getArticle
}