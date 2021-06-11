const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.controller');

router.get('/', studentController.getStudentList);

router.get('/:id', studentController.getStudentByID);

router.post('/', studentController.createNewStudent);

router.patch('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

module.exports = router;