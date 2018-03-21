/**
 * Created by YOU on 2018/3/21.
 */
const crypto = require('crypto')

module.exports = {
  encrypt: function (data, secret, salt) {
    return crypto.createHmac('sha256', secret || 'i love this secret!')
      .update(data + salt)
      .digest('hex');
  }
}