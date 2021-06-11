const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('NodeJs by Danh');
});

const studentRoutes = require('./src/routes/student.route');

app.use('/api/v1/student', studentRoutes);

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});