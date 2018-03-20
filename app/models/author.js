/**
 * Created by YOU on 2018/3/19.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('author', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    avator_id: {
      type: Sequelize.UUID
    },
    nick_name: {
      type: Sequelize.CHAR(30)
    },
    sex: {
      type: Sequelize.TINYINT,
      defaultValue: -1,
      allowNull: false
    },
    introduction: {
      type: Sequelize.STRING(300)
    },
    website: {
      type: Sequelize.CHAR(100)
    },
    er_code_id: {
      type: Sequelize.BIGINT
    },
    createtime: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    reword_open: {
      type: Sequelize.BLOB,
      defaultValue: false,
      allowNull: false
    },
    reword_description: {
      type: Sequelize.STRING(300)
    },
    password: {
      type: Sequelize.CHAR(20),
      allowNull: false
    },
    phone: {
      type: Sequelize.CHAR(11),
      unique: true
    },
    email: {
      type: Sequelize.STRING(300),
      allowNull: false,
      unique: true
    },
    editer_type: {
      type: Sequelize.TINYINT,
      defaultValue: 1,
      allowNull: false
    },
    mail_recive: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    is_disabled: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    balance: {
      type: Sequelize.INTEGER,
      defaultValue: 10,
      allowNull: false
    }
  })
}