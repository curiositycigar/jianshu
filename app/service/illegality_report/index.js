/**
 * Created by YOU on 2018/4/9.
 */
const {
  IllegalityReport,
  Op
} = require('../../models')

const createIllegalityReport = (params) => {
  params = _.pick(params, ['author_id', 'article_id', 'description'])
  return IllegalityReport.create(params).then(data => data, err => err)
}

// 不提供批量操作
const deleteIllegalityReport = (query) => {
  query = _.pick(query, ['author_id', 'id'])
  return IllegalityReport.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}
const getIllegalityReports = () => {
  return IllegalityReport.findAll().then(data => data, err => err)
}

const getIllegalityReport = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return IllegalityReport.findOne({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createIllegalityReport,
  getIllegalityReport,
  getIllegalityReports,
  deleteIllegalityReport
}