/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('subject', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    name: {
      type: Sequelize.CHAR(50),
      allowNull: false
    },
    author_id: {
      type: Sequelize.UUID,
      unique: true,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    cover_id: {
      type: Sequelize.UUID
    },
    description: {
      type: Sequelize.STRING(300),
      allowNull: false
    },
    article_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    follow_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    allow_contribute: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    should_audit: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  })
}