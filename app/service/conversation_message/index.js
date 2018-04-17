/**
 * Created by YOU on 2018/4/9.
 */
const {
  ConversationMessage
} = require('../../models')

const createConversationMessage = (params) => {
  params = _.pick(params, ['author_id', 'message_type', 'content', 'link'])
  return ConversationMessage.create(params).then(data => data, err => err)
}

// // 不提供删除功能 系统时钟自动删除时间太久的消息
// const deleteConversationMessage = (query, field) => {
//   query = _.pick(query, ['author_id'])
//   return ConversationMessage.destroy(
//     {
//       where: query
//     }
//   ).then(data => data[0] > 0, err => err)
// }

const updateConversationMessage = (query, field) => {
  query = _.pick(query, ['id', 'author_id'])
  field = _.pick(field, ['is_readed'])
  return ConversationMessage.update(field, {
    where: query
  }).then(data => data, err => err)
}

const getConversationMessages = (query) => {
  query = _.pick(query, ['author_id', 'is_readed'])
  return ConversationMessage.findAll({
    where: query
  }).then(data => data, err => err)
}

const getConversationMessage = (query) => {
  query = _.pick(query, ['id', 'author_id'])
  return ConversationMessage.findOne({
    where: query
  }).then(data => data, err => err)
}

const getConversationMessageById = (query) => {
  let id = query.id || id
  return ConversationMessage.findById(id).then(data => data, err => err)
}

module.exports = {
  createConversationMessage,
  deleteConversationMessage,
  updateConversationMessage,
  getConversationMessage,
  getConversationMessageById,
  getConversationMessages
}