/**
 * Created by YOU on 2018/4/8.
 */
const {
  Reword
} = require('../../models')

const createReword = (params) => {
  params = _.pick(params, ['author_id', 'target_id', 'count'])
  return Reword.create(params).then(data => data, err => err)
}

const getRewordsByAuthor = (query) => {
  query = _.pick(query, ['author_id'])
  return Reword.findAll({
    where: query
  }).then(data => data, err => err)
}

const getRewordsByTarget = (query) => {
  query = _.pick(query, ['target_id'])
  return Reword.findAll({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createReword,
  getRewordsByAuthor,
  getRewordsByTarget
}