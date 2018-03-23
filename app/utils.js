/**
 * Created by YOU on 2018/3/21.
 */
const crypto = require('crypto')

module.exports = {
  encrypt: function (data, salt, secret) {
    return crypto.createHmac('sha256', secret || 'i love this secret!')
      .update(data + (salt || 'salt' ))
      .digest('hex');
  },
  resultHandler: function (result) {
    if (result) {
      if (result && result.name && result.errors && result.errors) {
        //  错误信息
        return {
          error: {
            message: result.errors.message,
            code: -1
          }
        }
      } else {
        return {
          data: {result}
        }
      }
    } else {
      return {
        error: {
          message: '未知错误',
          code: -1
        }
      }
    }
  }
}