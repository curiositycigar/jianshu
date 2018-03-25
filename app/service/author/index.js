/**
 * Created by YOU on 2018/3/22.
 */
const Author = require('../../models').Author
const encrypt = require('../../utils').encrypt

const getAuthorById = (id) => {
  return Author.findById(id).then(data => data, err => err)
}

module.exports = {
  getAuthorById
}