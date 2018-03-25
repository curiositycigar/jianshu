/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('editer_type', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    key: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    value: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  })
}