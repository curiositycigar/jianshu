/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('comment', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    article_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id'
      }
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    is_reported: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}