/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('resource', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    resource_url: {
      type: Sequelize.CHAR(30),
      allowNull: false
    },
    resource_type: {
      type: Sequelize.TINYINT,
      allowNull: false
    }
  })
}