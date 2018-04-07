const {
  SubjectManager
} = require('../../models')

const createSubjectManager = (params) => {
  params = _.pick(params, ['author_id', 'subject_id'])
  return SubjectManager.create(params).then(data => data, err => err)
}

const deleteSubjectManager = (query) => {
  query = _.pick(query, ['subject_id', 'author_id'])
  return SubjectManager.destroy(
    {
      where: query
    }
  ).then(data => data, err => err)
}

const checkSubjectManager = (query) => {
  query = _.pick(query, ['subject_id', 'author_id'])
  return SubjectManager.findOne({
    where: query
  }).then(data => data, err => err)
}

module.exports = {
  createSubjectManager,
  deleteSubjectManager,
  checkSubjectManager
}