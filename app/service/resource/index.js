const {
  Resource
} = require('../../models')

const createResource = (params) => {
  params = _.pick(params, ['resource_url', 'resource_type', 'author_id'])
  return Resource.create(params).then(data => data, err => err)
}

const deleteResource = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return Resource.destroy(
    {
      where: query
    }
  ).then(data => data, err => err)
}

const getResource = (query) => {
  query = _.pick(query, ['id'])
  return Resource.findOne(
    {
      where: query
    }
  ).then(data => data, err => err)
}

module.exports = {
  createResource,
  deleteResource,
  getResource
}