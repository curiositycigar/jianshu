/**
 * Created by YOU on 2018/4/1.
 */
const {
  createContribute,
  deleteContribute,
  getContributes,
  updateContribute,
  getContributeById
} = require('../../service/contribute')
const {
  checkSubjectAuthor,
  getSubjectById
} = require('../../service/subject')
const {
  getArticle
} = require('../../service/article')
const {
  checkSubjectManager
} = require('../../service/subject_manager')

// 投稿者投稿
exports.createContribute = async (ctx, next) => {
  // 先通过文章id和当前用户id查找文章
  // 查找专题是否存在
  // 才可投稿
  let params = ctx.query
  if (params.subject_id && params.article_id) {
    let articleQuery = {
      id: params.article_id,
      author_id: ctx.state[tokenKey].id
    }
    let checkArticle = ctx.setBody(await getArticle(articleQuery))
    let subject_id = params.subject_id
    let checkSubject = ctx.setBody(await getSubjectById(subject_id))
    if (checkSubject.error) {
      ctx.body = ctx.setBody(null, '专题不存在')
    } else if (checkArticle.error) {
      ctx.body = ctx.setBody(null, '文章不存在')
    } else {
      let field = _.pick(params, ['article_id', 'subject_id'])
      field.author_id = ctx.state[tokenKey].id
      let result = await createContribute(field)
      ctx.body = ctx.setBody(result)
    }
  } else {
    ctx.throw(400)
  }
}
// 投稿者cancel投稿
exports.deleteContribute = async (ctx, next) => {
  // 匹配当前用户id和投稿id
  let params = ctx.query
  if (params.id) {
    let query = {id: params.id}
    query.author_id = ctx.state[tokenKey].id
    let result = await deleteContribute(query)
    ctx.body = ctx.setBody(result, '投稿不存在')
  } else {
    ctx.throw(400)
  }
}

exports.accessContribute = async (ctx, next) => {
  let params = ctx.query
  if (params.id) {
    let subject = await getSubjectById(params.id)
    if (subject.error) {
      ctx.body = ctx.setBody(null, '投稿信息不存在')
    } else {
      // 判断是否有权限操作文集
      // 先通过专题id和当前用户id验证专题拥有者
      let check = ctx.setBody(await checkSubjectAuthor(subjectQuery))
      if (check.error) {
        // 检查是否是管理者
        check = ctx.setBody(await checkSubjectManager({
          author_id: ctx.state[tokenKey].id,
          subject_id: subject.data.id
        }))
      }
      if (check.error) {
        ctx.body = ctx.setBody(null, '没有操作权限')
      } else {
        // 通过或不通过审核
      }
    }
  } else {
    ctx.throw(400)
  }
  let subjectQuery = {id: ctx.query.subject_id}
  subjectQuery.author_id = ctx.state[tokenKey].id
  // 先通过专题id和当前用户id验证专题拥有者
  let check = ctx.setBody(await checkSubjectAuthor(subjectQuery))

}

// 获取我的投稿
exports.getMyContribute = async (ctx, next) => {
  // 专题id || 是否通过审核
  let query = _.pick(ctx.query, ['subject_id', 'access'])
  query.author_id = ctx.state[tokenKey].id
  let result = getContributes(query)
  ctx.body = ctx.setBody(result)
}

// 根据专题id获取投稿
exports.getContribute = async (ctx, next) => {
  let subjectQuery = {id: ctx.query.subject_id}
  subjectQuery.author_id = ctx.state[tokenKey].id
  // 先通过专题id和当前用户id验证专题拥有者
  let check = ctx.setBody(await checkSubjectAuthor(subjectQuery))
  if (check.error) {
    // 检查是否是管理者
    check = ctx.setBody(await checkSubjectManager({
      author_id: ctx.state[tokenKey].id,
      subject_id: subject.data.id
    }))
  }
  if (check.error) {
    // 未通过验证，获取已审核通过投稿
    let query = _.pick(ctx.query, ['subject_id'])
    query.access = true
    if (query.subject_id) {
      let result = await getContributes(query)
      ctx.body = ctx.setBody(result, '专题不存在')
    } else {
      ctx.throw(400)
    }
  } else {
    // 通过验证，根据传参获取是否审核通过投稿，默认获取所有
    let query = _.pick(ctx.query, ['subject_id', 'access'])
    let result = await getContributes(query)
    ctx.body = ctx.setBody(result, '专题不存在')
  }
}