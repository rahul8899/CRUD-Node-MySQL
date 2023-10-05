const StudentController = require('../controllers/student.controller');
const express = require('express');
const authMiddleware = require('../middleware/auth.middleware')
const StudentRouter = express.Router();

StudentRouter.post('/create', StudentController.createStudent);
StudentRouter.get('/get', authMiddleware, StudentController.selectStudent);
StudentRouter.put('/update/:stud_id', StudentController.updateStudent);
StudentRouter.delete('/delete/:stud_id', StudentController.deleteStudent);
StudentRouter.post('/login', StudentController.loginUser);
module.exports = StudentRouter;