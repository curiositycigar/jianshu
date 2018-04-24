/**
 * Created by YOU on 2018/3/22.
 */
const {
  Op,
  Author
} = require('../../models')
const encrypt = require('../../utils').encrypt

const createAuthor = (params) => {
  params = _.pick(params, ['email', 'password'])
  return Author.create(params).then(data => data, err => err)
}

const deleteAuthorById = (query) => {
  let id = query.id || query
  return Author.destroy(
    {
      where: {id}
    }
  ).then(data => data, err => err)
}

const deleteAuthorByIdPassword = (query, field) => {
  query = _.pick(query, ['id', 'password'])
  return Author.destroy(
    {
      where: query
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
  ).then(data => data, err => err)
}

const updateAuthorById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, [])
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

const getAuthorByIdList = (query) => {
  return Author.findAll({
    id: {
      [Op.or]: query['idList']
    }
  }).then(data => data, err => err)
}

module.exports = {
  createAuthor,
  deleteAuthorById,
  deleteAuthorByIdPassword,
  validateAccount,
  getAuthorById,
  updateAuthorById,
  updateAuthorPasswordByIdPassword,
  updateAuthorPasswordById,
  getAuthorByIdList
}