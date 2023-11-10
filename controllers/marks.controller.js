const { Sequelize } = require('sequelize');
const Marks = require('../models/marks')
const Student = require('../models/student');

// Create a new mark entry
const createMark = async (req, res) => {
    try {
        const mark = await Marks.create(req.body);
        res.json({ success: true, data: mark });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all marks
const getAllMarks = async (req, res) => {
    try {
        const marks = await Marks.findAll();
        res.json({ success: true, data: marks });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a mark entry
const updateMark = async (req, res) => {
    const { marks_id } = req.params;
    try {
        const mark = await Marks.findByPk(marks_id);
        if (mark) {
            mark.update(req.body);
            res.json({ success: true, data: mark });
        } else {
            res.json({ success: false })
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a mark entry
const deleteMark = async (req, res) => {
    const { marks_id } = req.params;
    try {
        const deleted = await Marks.destroy({
            where: { marks_id: marks_id },
        });
        if (deleted) {
            res.json({ success: true, message: 'Mark deleted successfully' });
        } else {
            res.json({ success: false, message: 'Mark not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    createMark,
    getAllMarks,
    updateMark,
    deleteMark,
};
