/**
 * Created by YOU on 2018/3/27.
 */
const ArticleGroup = require('../../models').ArticleGroup

const createArticleGroup = (params) => {
  params = _.pick(params, ['name', 'description', 'author_id'])
  return ArticleGroup.create(params).then(data => data, err => err)
}

const getArticleGroupById = (params) => {
  params = _.pick(params, ['name', 'description', 'author_id'])
  return ArticleGroup.create(params).then(data => data, err => err)
}

const updateArticleGroupById = (query, field) => {
  let id = query.id || query
  field = _.pick(field, ['name', 'description', 'cover_id'])
  return ArticleGroup.update(
    field,
    {
      where: {id}
    }
  ).then(data => data[0] > 0, err => err)
}
module.exports = {
  createArticleGroup,
  updateArticleGroupById
}

function check(list, cb) {
  var valid = true;
  list.map(function (value) {
    var element = $('input[name=' + value.name + ']')
    element.parent().children('.errMessage').html('')
    if (value.canEmpty && !element.val()) {
    } else if (value.reg ? value.reg.test(element.val()) : value.validator(element.val())) {
    } else {
      element.parent().children('.errMessage').html('* ' + value.message)
      valid = false
    }
  });
  cb(valid);
}

