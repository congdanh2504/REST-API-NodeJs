
const StudentModel = require('../models/student.model');


exports.getStudentList = (req,res) => {
    StudentModel.getAllStudents((err, students) => {
        if (err) {
            res.send(err);
        }
        console.log('Student ',students);
        res.send(students)
    })
}

exports.getStudentByID = (req,res) => {
    StudentModel.getStudentByID(req.params.id, (err, student) => {
        if (err) {
            res.send(err);
        }
        console.log('Student ',student);
        res.send(student)
    })
}

exports.createNewStudent = (req,res) => {
    console.log('Create new student',req.body);
    const studentRequestData = new StudentModel(req.body);
    if (req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({
            success: false,
            message: 'Please fill all feilds'
        })
    } else {
        StudentModel.createNewStudent(studentRequestData, (err, student)=> {
            if (err) 
            res.send(err);
            res.json({status: true, message: 'Student created', data: student.insertId});
        });
    }
}

exports.updateStudent = (req, res) => {
    const studentRequestData = new StudentModel(req.body);
    if (req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({
            success: false,
            message: 'Please fill all feilds'
        })
    } else {
        StudentModel.updateStudent(req.params.id, studentRequestData, (err, student)=> {
            if (err) 
            res.send(err);
            res.json({status: true, message: 'Student updated'});
        });
    }
}

exports.deleteStudent = (req, res) => {
    StudentModel.deleteStudent(req.params.id , (err, student)=> {
        if (err) 
        res.send(err);
        res.json({status: true, message: 'Student deleted'});
    });
}