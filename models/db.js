const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'rahul88sql',
    database: 'exam_marks'
})

module.exports = sequelize;