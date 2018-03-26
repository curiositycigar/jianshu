/**
 * Created by YOU on 2018/3/26.
 */
const Article = require('../../models').Article

const getArticleById = (query) => {
  let id = query.id || query
  return Article.findById(id).then(data => data, err => err)
}

module.exports = {
  getArticleById
}