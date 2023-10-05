const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Student = require('./student');

const Marks = sequelize.define('marks', {
    marks_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        notNull: true,
        autoIncrement: true,
        unique: true
    },
    stud_id: {
        type: DataTypes.INTEGER,
        notNull: true,
        // references: {
        //     model: Student,
        //     key: 'stud_id'
        // }
    },
    phy: {
        type: DataTypes.INTEGER,
        notNull: false
    },
    chem: {
        type: DataTypes.INTEGER,
        notNull: false
    },
    maths: {
        type: DataTypes.INTEGER,
        notNull: false
    }
}, {
    tableName: 'marks',
    timestamps: false
});

// Marks.belongsTo(Student, { foreignKey: 'stud_id' });

module.exports = Marks;