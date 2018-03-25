/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('illegality_report', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    target_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    target_type: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    handled: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  })
}