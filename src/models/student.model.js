var dbConn = require('../../config/db.config');

var Student = function (student) {
    this.hoten = student.hoten;
    this.namsinh = student.namsinh;
    this.diachi = student.diachi;
}

Student.getAllStudents = (result) => {
    dbConn.query('SELECT * FROM sinhvien', (err, res) => {
        if (err) {
            console.log('Error while fetching', err);
            result(err, null);
        } else {
            console.log('Students fetched successfully');
            result(null, res);
        }
    })
}

Student.getStudentByID = (id, result) => {
    dbConn.query('SELECT * FROM sinhvien WHERE ID=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching by id', err);
            result(err, null);
        } else {
            console.log('Students fetched by id successfully');
            result(null, res);
        }
    })
}

Student.createNewStudent = (studentData, result) => {
    dbConn.query('INSERT INTO sinhvien SET ?', studentData, (err, res) => {
        if (err) {
            console.log('Error while insert');
            result(err, null);
        } else {
            console.log('Student created successfully');
            result(null, res);
        }
    });
}

Student.updateStudent = (id, studentData, result) => {
    dbConn.query('UPDATE sinhvien SET hoten = ?, namsinh = ?, diachi = ? WHERE id = ?',
     [studentData.hoten, studentData.namsinh, studentData.diachi,id], (err, res) => {
        if (err) {
            console.log('Error while updating');
            result(err, null)
        } else {
            console.log('Student updated');
            result(null, res);
        }
    });

}

Student.deleteStudent = (id, result) => {
    dbConn.query('DELETE FROM sinhvien WHERE id = ?',id, (err, res) => {
        if (err) {
            console.log('Error while deleting');
            result(err, null)
        } else {
            console.log('Student deleted');
            result(null, res);
        }
    })
}

module.exports = Student;