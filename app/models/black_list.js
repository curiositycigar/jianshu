/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('black_list', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    black_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  })
}