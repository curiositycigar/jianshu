/**
 * Created by YOU on 2018/3/22.
 */
const Author = require('../../models').Author
const encrypt = require('../../utils')

const createAuthor = (params) => {
  return Author.create(params).then(data => data, err => err)
}
const validateAccount = (params) => {
  params.password = encrypt(params.password)
  return new Promise(function (resolve, reject) {

  })
}

module.exports = {
  createAuthor,
  validateAccount
}