/**
 * Created by YOU on 2018/4/8.
 */
const {
  LikeArticle
} = require('../../models')

const createLikeArticle = (params) => {
  params = _.pick(params, ['author_id', 'article_id'])
  return LikeArticle.create(params).then(data => data, err => err)
}

const deleteLikeArticle = (query, field) => {
  query = _.pick(query, ['author_id', 'article_id'])
  return LikeArticle.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}


const getLikeArticles = (query) => {
  query = _.pick(query, ['author_id', 'article_id'])
  return LikeArticle.findAll({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createLikeArticle,
  deleteLikeArticle,
  getLikeArticles
}