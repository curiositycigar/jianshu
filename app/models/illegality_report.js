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
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    article_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id'
      }
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    handled: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  })
}