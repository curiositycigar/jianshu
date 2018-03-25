/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('contribute', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    article_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    author_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    subject_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    access: {
      type: Sequelize.TINYINT,
      defaultValue: 0,
      allowNull: false
    },
    create_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  })
}