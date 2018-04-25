/**
 * Created by YOU on 2018/4/23.
 */
const {
  createFollowArticleGroup,
  deleteFollowArticleGroup,
  getFollowArticleGroups
} = require('../../service/follow_article_group')
const {
  createFollowAuthor,
  deleteFollowAuthor,
  getFollowAuthors
} = require('../../service/follow_author')
const {
  createFollowSubject,
  deleteFollowSubject,
  getFollowSubjects
} = require('../../service/follow_subject')
const {
  getAuthorByIdList
} = require('../../service/author')
const {
  getArticleGroupByIdList
} = require('../../service/article_group')
const {
  getSubjectByIdList
} = require('../../service/subject')

exports.followAG = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['article_group_id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await createFollowArticleGroup(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}
exports.followA = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['follow_author_id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await createFollowAuthor(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}
exports.followS = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['subject_id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await createFollowSubject(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.deleteAG = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['article_group_id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await deleteFollowArticleGroup(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}
exports.deleteA = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['follow_author_id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await deleteFollowAuthor(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}
exports.deleteS = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['subject_id']
  let field = _.pick(params, requireField)
  field.author_id = ctx.state[tokenKey].id
  if (_.hasAll(field, requireField)) {
    let result = await deleteFollowSubject(field)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}
exports.getFollowedAG = async (ctx, next) => {
  let result = await getFollowArticleGroups({
    author_id: ctx.state[tokenKey].id
  })
  let data = ctx.setBody(result)
  if (!data.error && data.data && data.data.length) {
    ctx.body = ctx.setBody(await getArticleGroupByIdList({
      idList: data.data.map(item => item.id)
    }))
  } else {
    ctx.body = data
  }
}
exports.getFollowedA = async (ctx, next) => {
  let result = await getFollowAuthors({
    author_id: ctx.state[tokenKey].id
  })
  let data = ctx.setBody(result)
  if (!data.error && data.data && data.data.length) {
    ctx.body = ctx.setBody(await getAuthorByIdList({
      idList: data.data.map(item => item.id)
    }))
  } else {
    ctx.body = data
  }
}
exports.getFollowedS = async (ctx, next) => {
  let result = await getFollowSubjects({
    author_id: ctx.state[tokenKey].id
  })
  let data = ctx.setBody(result)
  if (!data.error && data.data && data.data.length) {
    ctx.body = ctx.setBody(await getSubjectByIdList({
      idList: data.data.map(item => item.id)
    }))
  } else {
    ctx.body = data
  }
}
exports.getAGFollowed = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['article_group_id']
  let query = _.pick(params, requireField)
  if (_.hasAll(query, requireField)) {
    let result = await getFollowArticleGroups(query)
    let data = ctx.setBody(result)
    if (!data.error && data.data && data.data.length) {
      ctx.body = ctx.setBody(await getArticleGroupByIdList({
        idList: data.data.map(item => item.id)
      }))
    } else {
      ctx.body = data
    }
  } else {
    ctx.throw(400)
  }
}
exports.getAFollowed = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['follow_author_id']
  let query = _.pick(params, requireField)
  if (_.hasAll(query, requireField)) {
    let result = await getFollowAuthors(query)
    let data = ctx.setBody(result)
    if (!data.error && data.data && data.data.length) {
      ctx.body = ctx.setBody(await getAuthorByIdList({
        idList: data.data.map(item => item.id)
      }))
    } else {
      ctx.body = data
    }
  } else {
    ctx.throw(400)
  }
}
exports.getSFollowed = async (ctx, next) => {
  let params = ctx.query
  let requireField = ['subject_id']
  let query = _.pick(params, requireField)
  if (_.hasAll(query, requireField)) {
    let result = await getFollowSubjects(query)
    let data = ctx.setBody(result)
    if (!data.error && data.data && data.data.length) {
      ctx.body = ctx.setBody(await getSubjectByIdList({
        idList: data.data.map(item => item.id)
      }))
    } else {
      ctx.body = data
    }
  } else {
    ctx.throw(400)
  }
}