const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors())


const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
    res.send('working');
});

app.get('/course', (req, res) => {
    res.send(categories);
});

app.get('/course/:id', (req, res) => {
    const id = req?.params?.id;
    const selectedCourse = courses.find(course => course._id === id);
        res.send(selectedCourse); 
})


app.listen(port, () => {
    console.log('server is running on port: ', port);
})