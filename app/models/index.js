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

const Author = require('./author')(Sequelize, sequelize)

Author.sync().then(() => {
  return Author.create({
    password: '12321321',
    email: 'aasdsad@weq.com'
  });
})