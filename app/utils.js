/**
 * Created by YOU on 2018/3/21.
 */
const crypto = require('crypto')

/*
* code:
* 未知错误: -1
*
*
* */

module.exports = {
  encrypt: function (data, salt, secret) {
    return crypto.createHmac('sha256', secret || 'i love this secret!')
      .update(data + (salt || 'salt'))
      .digest('hex');
  },
  responseHandler: function (result, message = '未知错误') {
    let responseData = {}
    if (result) {
      if (result && result.name && result.errors && result.errors) {
        //  错误信息
        message = result.errors.map(item => item.message).join(' & ')
        responseData = {
          error: {
            message: message,
            code: -1
          }
        }
      } else {
        responseData = {
          data: result
        }
      }
    } else {
      responseData = {
        error: {
          message: message,
          code: -1
        }
      }
    }
    return responseData
  }
}