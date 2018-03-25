/**
 * Created by YOU on 2018/3/22.
 */
const Author = require('../../models').Author
const encrypt = require('../../utils').encrypt

const createAuthor = (params) => {
  return Author.create(params).then(data => data, err => err)
}
const validateAccount = (params) => {
  params.password = encrypt(params.password)
  return Author.findOne({
    where: params
  }).then(data => data, err => err)
}

module.exports = {
  createAuthor,
  validateAccount
}