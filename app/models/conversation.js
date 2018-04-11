/**
 * Created by YOU on 2018/3/21.
 */
module.exports = function (Sequelize, sequelize) {
  return sequelize.define('conversation', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    author_id: {
      type: Sequelize.UUID,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    talk_to: {
      type: Sequelize.UUID,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    readed_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  })
}