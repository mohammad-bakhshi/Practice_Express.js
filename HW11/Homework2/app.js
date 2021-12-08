const express=require('express');

const app=express();

app.use(express.static("views"));

app.listen(8000,function()
{
    console.log('Listening');
});