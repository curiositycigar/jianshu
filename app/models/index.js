/**
 * Created by YOU on 2018/3/19.
 */
const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', 'test', '123456', {
    host: '192.168.175.130',
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

const Author = sequelize.define('author', {
    author_id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    avator_id: {
        type: Sequelize.CHAR(30)
    },
    nick_name: {
        type: Sequelize.CHAR(30)
    },
    sex: {
        type: Sequelize.TINYINT
    },
    introduction: {
        type: Sequelize.STRING(300)
    },
    website: {
        type: Sequelize.CHAR(100)
    },
    er_code: {
        type: Sequelize.BIGINT
    },
    createtime: {
        type: Sequelize.DATE
    },
    reword_open: {
        type: Sequelize.BLOB
    },
    rewoed_description: {
        type: Sequelize.STRING(300)
    }
})

Author.sync().then(() => {
    console.log('success!!')
})