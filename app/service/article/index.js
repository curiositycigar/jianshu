/**
 * Created by YOU on 2018/3/26.
 */
const Article = require('../../models').Article

exports.createArticle = (params) => {
  params = _.pick(params, ['title', 'content', 'author_id', 'article_group_id'])
  return Article.create(params).then(data => data, err => err)
}

exports.updateArticleById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['title', 'content'])
  return Article.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

exports.moveArticleById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['article_group_id'])
  return Article.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

exports.updateArticleStatusById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['is_publish'])
  return Article.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

exports.deleteArticleById = (query, field) => {
  let id = query.id || query
  return Article.destroy(
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}


exports.getArticles = (query) => {
  query = _.pick(query, ['author_id', 'is_publish', 'article_group_id'])
  return Article.findAll({
    where: {
      ...query
    }
  }).then(data => data, err => err)
}

exports.getArticleById = (query) => {
  let id = query.id || query
  return Article.findById(id).then(data => data || {}, err => err)
}
