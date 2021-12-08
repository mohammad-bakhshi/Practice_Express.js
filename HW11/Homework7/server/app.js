const express=require('express');

const app=express();

const User=require('./routes/user')

app.use('/user',User);

app.listen(8000,function()
{
    console.log('Listening');
})

