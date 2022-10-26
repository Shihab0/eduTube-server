const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors())


const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
    res.send(courses);
});

app.get('/course', (req, res) => {
    res.send(categories);
});

app.get('/allCourse', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req?.params?.id;
    if(id == 08){
        res.send(courses)
    }
    const selectedCourse = courses.filter(course => course.course_id === id);
    res.send(selectedCourse); 
});

app.get('/buy/:id', (req, res) => {
    const id = req?.params?.id;
    console.log(id)
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse); 
})


app.listen(port, () => {
    console.log('server is running on port: ', port);
})