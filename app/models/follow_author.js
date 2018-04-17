/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('follow_author', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    follow_author_id: {
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