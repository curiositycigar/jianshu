/**
 * Created by YOU on 2018/3/19.
 */
module.exports = {
  port: 8234,
  auth: {
    expiresIn: 60 * 60,
    secret: 'secret',
    tokenKey: 'token'
  },
  databaseConfig: {
    user: 'mysql',
    password: '123456',
    database: 'test',
    options: {
      // host: '192.168.212.41',
      host: '192.168.175.130',
      port: 3306,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define: {
        charset: 'utf8',
        engine: 'InnoDB'
      },
      operatorsAliases: false
    }
  }
}