/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('subject_manager', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    subject_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'subjects',
        key: 'id'
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  })
}