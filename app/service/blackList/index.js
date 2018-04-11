/**
 * Created by YOU on 2018/4/8.
 */
const {
  BlackList
} = require('../../models')

const createBlackList = (params) => {
  params = _.pick(params, ['author_id', 'black_id'])
  return BlackList.create(params).then(data => data, err => err)
}

const deleteBlackList = (query, field) => {
  query = _.pick(query, ['author_id'])
  return BlackList.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const getBlackLists = (query) => {
  query = _.pick(query, ['author_id'])
  return BlackList.findAll({
    where: query
  }).then(data => data, err => err)
}

const blacked = (query) => {
  query = _.pick(query, ['black_id'])
  return BlackList.findOne({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createBlackList,
  deleteBlackList,
  blacked,
  getBlackLists
}