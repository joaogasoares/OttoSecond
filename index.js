const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req,res,next) => {
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//test route
app.get('/', (req, res, nex) => {
    res.send('Hello World')
});

//CRUD routes
app.use('/users', require('./routes/users'));

//sync database
sequelize
    .sync()
    .then(result => {
        console.log("Database connected")
        app.listen(3000)
    })
    .catch(err => console.log(err));
