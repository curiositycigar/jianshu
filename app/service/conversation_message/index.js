/**
 * Created by YOU on 2018/4/9.
 */
const {
  ConversationMessage
} = require('../../models')

const createSysMessage = (params) => {
  params = _.pick(params, ['author_id', 'message_type', 'content', 'link'])
  return ConversationMessage.create(params).then(data => data, err => err)
}

const deleteSysMessage = (query, field) => {
  query = _.pick(query, ['author_id'])
  return ConversationMessage.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const updateSysMessage = (query, field) => {
  query = _.pick(query, ['id', 'author_id'])
  field = _.pick(field, ['is_readed'])
  return ConversationMessage.update(field, {
    where: query
  }).then(data => data, err => err)
}

const getSysMessages = (query) => {
  query = _.pick(query, ['author_id', 'is_readed'])
  return ConversationMessage.findAll({
    where: query
  }).then(data => data, err => err)
}

const getSysMessage = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return ConversationMessage.findOne({
    where: query
  }).then(data => data, err => err)
}

const getSysMessageById = (query) => {
  let id = query.id || id
  return ConversationMessage.findById(id).then(data => data, err => err)
}

module.exports = {
  createSysMessage,
  deleteSysMessage,
  updateSysMessage,
  getSysMessage,
  getSysMessageById,
  getSysMessages
}