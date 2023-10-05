const express = require('express');
const marksRouter = express.Router();
const marksController = require('../controllers/marks.controller');

marksRouter.get('/stud-marks', marksController.studentWithMarks);

module.exports = marksRouter;