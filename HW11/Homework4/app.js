const express = require('express');

const app = express();

const Admin = require('./routes/admin');

const User = require('./routes/user');

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/admin', Admin);

app.use('/user', User);

app.listen(9000, function () {
    console.log("listening");
})