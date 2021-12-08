const express=require('express');

const app=express();

const Pages=require('./routes/pages');

app.use('/pages',Pages);




app.listen(8000,function () {
    console.log('listening');
})