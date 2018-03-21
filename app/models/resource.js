/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('resource', {
    source_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    source_url: {
      type: Sequelize.CHAR(30),
      allowNull: false
    },
    source_type: {
      type: Sequelize.TINYINT,
      allowNull: false
    }
  })
}