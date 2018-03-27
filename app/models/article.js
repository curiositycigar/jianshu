/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('article', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    title: {
      type: Sequelize.CHAR(30),
      allowNull: false
    },
    word_counts: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    read_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    like_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    is_publish: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    article_group_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    /* 评论 */
    comment_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    comment_id: {
      type: Sequelize.UUID,
      unique: true
    }
  })
}