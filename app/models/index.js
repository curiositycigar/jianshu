/**
 * Created by YOU on 2018/3/19.
 * document http://docs.sequelizejs.com/manual/tutorial/models-definition.html
 */
const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', 'mysql', '123456', {
  host: '192.168.212.41',
  port: 3306,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models = {
  TargetType: require('./target_type')(Sequelize, sequelize),
  EditerType: require('./editer_type')(Sequelize, sequelize),
  MessageType: require('./message_type')(Sequelize, sequelize),
  Resource: require('./resource')(Sequelize, sequelize),
  Author: require('./author')(Sequelize, sequelize),
  Article: require('./article')(Sequelize, sequelize),
  ArticleGroup: require('./article_group')(Sequelize, sequelize),
  Subject: require('./subject')(Sequelize, sequelize),
  Comment: require('./comment')(Sequelize, sequelize),
  SysMessage: require('./sys_message')(Sequelize, sequelize),
  Conversation: require('./conversation')(Sequelize, sequelize),
  ConversationMessage: require('./conversation_message')(Sequelize, sequelize),
  Follow: require('./follow')(Sequelize, sequelize),
  LikeArticle: require('./like_article')(Sequelize, sequelize),
  SubjectManager: require('./subject_manager')(Sequelize, sequelize),
  BlackList: require('./black_list')(Sequelize, sequelize),
  Contribute: require('./contribute')(Sequelize, sequelize),
  Reword: require('./reword')(Sequelize, sequelize),
  IllegalityReport: require('./illegality_report')(Sequelize, sequelize)
}

sequelize.sync()

module.exports = models