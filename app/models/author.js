/**
 * Created by YOU on 2018/3/19.
 */
const encrypt = require('../utils').encrypt

module.exports = function (Sequelize, sequelize) {
  return sequelize.define('author', {
    author_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    salt: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
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
    email: {
      type: Sequelize.STRING(300),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: '请输入正确的邮箱格式'
        }
      }
    },
    password: {
      type: Sequelize.CHAR(64),
      allowNull: false,
      set(val) {
        this.setDataValue('password', encrypt(val));
      }
    },
    phone: {
      type: Sequelize.CHAR(11),
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
    should_audit_comment: {
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