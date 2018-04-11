/**
 * Created by YOU on 2018/4/9.
 */
const {
  Conversation,
  Op
} = require('../../models')

const createConversation = (params) => {
  params = _.pick(params, ['author_id', 'talk_to'])
  return Conversation.create(params).then(data => data, err => err)
}

const getConversation = (query) => {
  query = _.pick(query, ['author_id', 'talk_to'])
  return Conversation.findOne({
    where: query
  }).then(data => data, err => err)
}

const deleteConversation = (query, field) => {
  query = _.pick(query, ['author_id', 'talk_to'])
  return Conversation.destroy(
    {
      where: query
    }
  ).then(data => data[0] > 0, err => err)
}

const getConversations = (query) => {
  query = _.pick(query, ['author_id'])
  return Conversation.findAll({
    where: query
  }).then(data => data, err => err)
}


const getConversationById = (query) => {
  let id = query.id || id
  return Conversation.findById(id).then(data => data, err => err)
}

module.exports = {
  createConversation,
  deleteConversation,
  getConversation,
  getConversationById,
  getConversations
}