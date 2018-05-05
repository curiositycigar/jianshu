/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('sys_message', {
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
    message_type: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: Sequelize.STRING(800),
      allowNull: false
    },
    link: {
      type: Sequelize.CHAR(100),
      allowNull: false
    },
    is_read: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  })
}