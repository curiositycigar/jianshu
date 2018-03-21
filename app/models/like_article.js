/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('like_article', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    article_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  })
}