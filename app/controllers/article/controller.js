/**
 * Created by YOU on 2018/3/26.
 */

const {
  createArticle,
  updateArticleById,
  deleteArticleById,
  getArticles,
  getArticle,
  getArticleByIdList
} = require('../../service/article')

const {
  createLikeArticle,
  deleteLikeArticle,
  getLikeArticles
} = require('../../service/like_article')

const {
  getArticleGroupById
} = require('../../service/article_group')

const {
  getAuthorByIdList
} = require('../../service/author')

const {
  tokenKey
} = require('../../config').auth

exports.createArticle = async (ctx, next) => {
  let params = ctx.query
  params.author_id = ctx.state[tokenKey].id
  if (params.title && params.content && params.article_group_id) {
    //  鉴定当前组是否存在
    let checkArticleGroup = ctx.setBody(await getArticleGroupById(params.article_group_id))
    if (checkArticleGroup.error) {
      // 检查失败
      ctx.body = ctx.setBody(null, '文集不存在')
    } else {
      let result = await createArticle(params)
      ctx.body = ctx.setBody(result, '新建文章失败 ,请稍后再试')
    }
  } else {
    ctx.throw(400)
  }
}

exports.deleteArticle = async (ctx, next) => {
  let params = _.pick(ctx.query, ['id'])
  params.author_id = ctx.state[tokenKey].id
  if (params.id) {
    let result = await deleteArticleById(params)
    ctx.body = ctx.setBody(result, '文章不存在')
  } else {
    ctx.throw(400)
  }
}
// 获取自己所有文章（传入文集article_group_id或不传）
exports.getMyArticles = async (ctx, next) => {
  let params = _.pick(ctx.query, ['article_group_id', 'id'])
  params.author_id = ctx.state[tokenKey].id
  // 自己的文章，不用判断is_publish
  if (params.id) {
    let result = await getArticle(params)
    ctx.body = ctx.setBody(result, '文章不存在')
  } else if (params.article_group_id) {
    let result = await getArticles(params)
    ctx.body = ctx.setBody(result, '文集不存在')
  } else {
    let result = await getArticles(params)
    ctx.body = ctx.setBody(result)
  }
}
// 获取其他用户文章（根据文集article_group_id或用户id或不传）
exports.getArticles = async (ctx, next) => {
  let params = _.pick(ctx.query, ['article_group_id', 'author_id', 'id'])
  params.is_publish = true
  if (params.id) {
    let result = await getArticle(params)
    ctx.body = ctx.setBody(result, '文章不存在')
  } else if (params.article_group_id) {
    let result = await getArticles(params)
    ctx.body = ctx.setBody(result, '文集不存在')
  } else if (params.author_id) {
    let result = await getArticles(params)
    ctx.body = ctx.setBody(result, '用户不存在')
  } else {
    ctx.throw(400)
  }
}

exports.updateArticle = async (ctx, next) => {
  let query = _.pick(params, ['id'])
  let params = _.pick(params, ['title', 'content'])
  query.author_id = ctx.state[tokenKey].id
  if (query.id && params.title && params.content) {
    let result = updateArticleById(query, params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.moveArticle = async (ctx, next) => {
  let query = _.pick(params, ['id'])
  let params = _.pick(params, ['article_group_id'])
  query.author_id = ctx.state[tokenKey].id
  if (query.id && params.title && params.content) {
    let result = updateArticleById(query, params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.changeArticleStatus = async (ctx, next) => {
  let query = _.pick(params, ['id'])
  let params = _.pick(params, ['is_public'])
  query.author_id = ctx.state[tokenKey].id
  if (query.id && params.title && params.content) {
    let result = updateArticleById(query, params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

// 喜欢文章
exports.likeArticle = async (ctx, next) => {
  let params = _.pick(params, ['article_id'])
  params.author_id = ctx.state[tokenKey].id
  if (params.article_id) {
    let result = createLikeArticle(params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.deleteLikeArticle = async (ctx, next) => {
  let params = _.pick(params, ['article_id'])
  params.author_id = ctx.state[tokenKey].id
  if (params.article_id) {
    let result = deleteLikeArticle(params)
    ctx.body = ctx.setBody(result)
  } else {
    ctx.throw(400)
  }
}

exports.getLikeUsers = async (ctx, next) => {
  let query = _.pick(params, ['article_id'])
  if (query.article_id) {
    let result = ctx.setBody(getLikeArticles(params))
    if (result.error) {
      ctx.body = ctx.setBody(null, '获取用户列表失败')
    } else {

    }
  } else {
    ctx.throw(400)
  }
}

exports.getLikeArticles = async (ctx, next) => {
  query.author_id = ctx.state[tokenKey].id
  let result = deleteLikeArticle(params)
  ctx.body = ctx.setBody(result)
}
