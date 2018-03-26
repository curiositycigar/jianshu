/**
 * Created by YOU on 2018/3/22.
 */
const Author = require('../../models').Author
const encrypt = require('../../utils').encrypt

const createAuthor = (params) => {
  params = _.pick(params, ['email', 'password'])
  return Author.create(params).then(data => data, err => err)
}

const deleteAuthorById = (query, field) => {
  let id = query.id || query
  return Author.destroy(
    {
      where: {id}
    }
  ).then(data => data, err => err)
}

const validateAccount = (query) => {
  query = _.pick(query, ['email', 'password'])
  query.password = encrypt(query.password)
  return Author.findOne({
    where: query
  }).then(data => data, err => err)
}

const getAuthorById = (query) => {
  let id = query.id || query
  return Author.findById(
    id,
    {
      attributes: {exclude: ['salt', 'password', 'phone', 'email']}
    }
  ).then(data => data || {}, err => err)
}

const updateAuthorById = (query, field) => {
  let id = query.id || query
  return Author.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

const updateAuthorPasswordByIdPassword = (query, field) => {
  query = _.pick(query, ['id', 'password'])
  // 验证前加密
  query.password = encrypt(query.password.trim())
  field = _.pick(field, ['password'])
  return Author.update(
    field,
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const updateAuthorPasswordById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['password'])
  return Author.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}

module.exports = {
  createAuthor,
  deleteAuthorById,
  validateAccount,
  getAuthorById,
  updateAuthorById,
  updateAuthorPasswordByIdPassword,
  updateAuthorPasswordById
}