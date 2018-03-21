/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('comment', {
    comment_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    target_type: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    target_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    target_author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    is_reported: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}