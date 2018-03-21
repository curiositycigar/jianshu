/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('follow', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    target_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    target_type: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  })
}