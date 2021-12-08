const express = require('express');
const app = express();
const HelloWorld = require('./routes/helloWorld')



app.use('/', HelloWorld);


app.listen(8000,function() {
    console.log('listening');
})
