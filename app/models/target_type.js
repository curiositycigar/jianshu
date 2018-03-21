/**
 * Created by YOU on 2018/3/21.
 */
// 数据库实体key value对应表
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('target_type', {
    key: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    value: {
      type: Sequelize.STRING(50)
    }
  })
}