const express = require('express')
const router = express.Router();
const StudentRouter = require('./routes/student.routes');
const marksRouter = require('./routes/marks.routes');


router.use('/student', StudentRouter)
router.use('/marks', marksRouter)
module.exports = router;