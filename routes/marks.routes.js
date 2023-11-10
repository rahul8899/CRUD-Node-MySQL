const express = require('express');
const marksRouter = express.Router();
const marksController = require('../controllers/marks.controller');
const authMiddleware = require('../middleware/auth.middleware')

marksRouter.post('/create', authMiddleware, marksController.createMark);
marksRouter.get('/get', authMiddleware, marksController.getAllMarks);
marksRouter.put('/update/:marks_id', authMiddleware, marksController.updateMark);
marksRouter.delete('/delete/:marks_id', authMiddleware, marksController.deleteMark);

module.exports = marksRouter;