/**
 * Created by YOU on 2018/4/9.
 */
const {
  IllegalityReport
} = require('../../models')

const createIllegalityReport = (params) => {
  params = _.pick(params, ['author_id', 'article_id', 'description'])
  return IllegalityReport.create(params).then(data => data, err => err)
}

const getIllegalityReports = (query) => {
  query = _.pick(query, ['author_id'])
  return IllegalityReport.findAll({
    where: query
  }).then(data => data, err => err)
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
  getIllegalityReports
}