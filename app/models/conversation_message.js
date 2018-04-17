/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('conversation_message', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    conversation_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'conversations',
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
      type: Sequelize.STRING(500),
      allowNull: false
    },
    is_deleted: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 3 // 3 未删除 1 仅author 2 仅receive 0删除
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  })
}