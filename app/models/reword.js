/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('reword', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    target_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    count: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  })
}