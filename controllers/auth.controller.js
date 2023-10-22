const jwt = require('jsonwebtoken')
const Student = require('../models/student')

const loginUser = async (req, res) => {
    const { stud_id, stud_pass } = req.body;
    try {
        const student = await Student.findByPk(stud_id);
        if (!student) {
            res.json({ success: false, message: 'User not found' })
        }

        const isPasswordValid = await (stud_pass, student.stud_pass);
        if (!isPasswordValid) {
            res.json({ success: false, message: 'Invalid password' })
        }
        const JWT_SECRET = 'rahul'
        const token = await jwt.sign({ stud_id: stud_id }, JWT_SECRET);
        return res.json({ success: true, message: "Login successful", token: token })
    } catch (error) {
        console.log("Error while login", error);
        res.json({ error: error.message })
    }
}

module.exports = {
    loginUser
}