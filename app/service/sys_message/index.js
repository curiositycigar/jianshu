/**
 * Created by YOU on 2018/4/8.
 */
const {
  SysMessage
} = require('../../models')

const createSysMessage = (params) => {
  params = _.pick(params, ['author_id', 'message_type', 'content', 'link'])
  return SysMessage.create(params).then(data => data, err => err)
}

const deleteSysMessage = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return SysMessage.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const updateSysMessage = (query, field) => {
  query = _.pick(query, ['id', 'author_id'])
  field = _.pick(field, ['is_read'])
  return SysMessage.update(field, {
    where: query
  }).then(data => data, err => err)
}

const getSysMessages = (query) => {
  query = _.pick(query, ['author_id', 'is_read'])
  return SysMessage.findAll({
    where: query
  }).then(data => data, err => err)
}

const getSysMessage = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return SysMessage.findOne({
    where: query
  }).then(data => data, err => err)
}

const getSysMessageById = (query) => {
  let id = query.id || id
  return SysMessage.findById(id).then(data => data, err => err)
}

module.exports = {
  createSysMessage,
  deleteSysMessage,
  updateSysMessage,
  getSysMessage,
  getSysMessageById,
  getSysMessages
}