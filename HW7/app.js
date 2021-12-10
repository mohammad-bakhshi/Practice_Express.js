const express=require('express');

const app=express();

const User=require('./routes/user');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static('public'));

app.use('/user',User);

app.listen(8000,()=>console.log('Listening on port 8000'));