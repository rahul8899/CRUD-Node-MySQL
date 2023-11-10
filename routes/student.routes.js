const StudentController = require('../controllers/student.controller');
const authController = require('../controllers/auth.controller');
const express = require('express');
const authMiddleware = require('../middleware/auth.middleware')
const StudentRouter = express.Router();

StudentRouter.post('/login', authController.loginUser);
StudentRouter.post('/create', StudentController.createStudent);
StudentRouter.get('/get', authMiddleware, StudentController.selectStudent);
StudentRouter.put('/update/:stud_id', authMiddleware, StudentController.updateStudent);
StudentRouter.delete('/delete/:stud_id', authMiddleware, StudentController.deleteStudent);

module.exports = StudentRouter;