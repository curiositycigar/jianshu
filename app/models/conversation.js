/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('conversation', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    author1_id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    author2_id: {
      type: Sequelize.UUID,
      allowNull: false
    }
  })
}