const { DataTypes, INTEGER } = require('sequelize')
const sequelize = require('./db');
const Marks = require('./marks');

const Student = sequelize.define('student', {
    stud_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        notNull: true,
        unique: true,
        autoIncrement: true
    },
    stud_name: {
        primaryKey: false,
        type: DataTypes.STRING
    },
    stud_dob: {
        primaryKey: false,
        type: DataTypes.DATEONLY
    },
    stud_pass: {
        primaryKey: false,
        type: DataTypes.STRING
    }
}, {
    tableName: 'student',
    timestamps: false
});
Student.hasOne(Marks, { foreignKey: 'stud_id' });

module.exports = Student;