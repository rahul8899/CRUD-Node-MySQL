const bcrypt = require('bcrypt');

const createStudent = async (req, res) => {
    try {
        const { body } = req;
        const hassedPassword = await bcrypt.hash(body.stud_pass, 10);
        const newStudent = await Student.create({
            stud_name: body.stud_name,
            stud_dob: body.stud_dob,
            stud_pass: hassedPassword
        });
        if (newStudent) {
            res.json({ success: true, data: newStudent })
        } else {
            res.json({ success: false })
        }
    } catch (error) {
        console.log("Error in createStudent", error);
        res.json({ error: error })
    }
};

const selectStudent = async (req, res) => {
    try {
        const student = await Student.findAll();
        if (student) {
            res.json({ success: true, data: student })
        } else {
            res.json({ success: false })
        }
    } catch (error) {
        console.log("Error in SelectStudent", error);
        res.json({ error: error })
    }
};

const updateStudent = async (req, res) => {
    const { stud_id } = req.params;
    try {
        const student = await Student.findByPk(stud_id)
        if (student) {
            await student.update(req.body);
            res.json({ success: true, data: student })
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.log("Failed to update student", error);
        res.json({ error: error })
    }
};

const deleteStudent = async (req, res) => {
    const { stud_id } = req.params;
    try {
        const student = await Student.findByPk(stud_id)
        if (student) {
            await student.destroy();
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    } catch (error) {
        console.log("Failed to delete student", error);
        res.json({ error: error.message })
    }
}


module.exports = {
    createStudent,
    selectStudent,
    updateStudent,
    deleteStudent
}