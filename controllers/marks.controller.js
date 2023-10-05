const { Sequelize } = require('sequelize');
const Marks = require('../models/marks')
const Student = require('../models/student');

const studentWithMarks = async (req, res) => {
    try {
        const studentWithMarks = await Student.findAll({
            include: [{
                model: Marks,
                attributes: ['phy', 'chem', 'maths'],
            }]
        });

        if (studentWithMarks) {
            res.json({ success: true, data: studentWithMarks });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.log("stude wiht marks eror ", error);
        res.json({ messg: 'internl server erro' })
    }
};

module.exports = { studentWithMarks };