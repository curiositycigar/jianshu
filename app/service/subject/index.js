/**
 * Created by YOU on 2018/4/1.
 */
const {
  Subject
} = require('../../models')

const createSubject = (params) => {
  params = _.pick(params, ['author_id', 'name', 'description'])
  return Subject.create(params).then(data => data, err => err)
}

const getSubjectById = (query) => {
  let id = query.id || query
  return Subject.findById(id).then(data => data, err => err)
}

const checkSubjectAuthor = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return Subject.findOne({
    where: query
  }).then(data => data, err => err)
}

const getSubjectsByAuthorId = (query) => {
  let author_id = query.author_id || query
  return Subject.findAll({
    where: {
      author_id: author_id
    }
  }).then(data => data, err => err)
}

const deleteSubject = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return Subject.destroy(
    {
      where: query
    }
  ).then(data => data, err => err)
}

const updateSubject = (query, field) => {
  query = _.pick(query, ['id', 'author_id'])
  field = _.pick(field, ['name', 'description', 'cover_id', 'should_audit'])
  return Subject.update(
    field,
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

module.exports = {
  createSubject,
  getSubjectById,
  getSubjectsByAuthorId,
  deleteSubject,
  updateSubject,
  checkSubjectAuthor
}