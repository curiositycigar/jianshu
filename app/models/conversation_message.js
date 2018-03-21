/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('conversation_message', {
    message_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    conversation_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    receiver_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    is_readed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_deleted: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 2
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  })
}