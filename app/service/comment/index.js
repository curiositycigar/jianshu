/**
 * Created by YOU on 2018/4/8.
 */
const {
  Comment
} = require('../../models')

const createComment = (params) => {
  params = _.pick(params, ['article_id', 'author_id', 'content'])
  return Comment.create(params).then(data => data, err => err)
}

const deleteComment = (query, field) => {
  query = _.pick(query, ['author_id', 'id'])
  return Comment.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const getComments = (query) => {
  query = _.pick(query, ['article_id', 'author_id'])
  return Comment.findAll({
    where: query
  }).then(data => data, err => err)
}

const getComment = (query) => {
  query = _.pick(query, ['id'])
  return Comment.findOne({
    where: query
  }).then(data => data, err => err)
}

const getCommentById = (query) => {
  let id = query.id || id
  return Comment.findById(id).then(data => data, err => err)
}

module.exports = {
  createComment,
  deleteComment,
  getComment,
  getCommentById,
  getComments
}