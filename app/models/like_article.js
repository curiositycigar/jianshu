/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('like_article', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    article_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id'
      }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  })
}