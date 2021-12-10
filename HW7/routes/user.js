const express = require('express');

const router=express.Router();

const path=require('path');

const users=require('../users.json');

router.get('/login',(req,res)=>
{
    res.sendFile(path.join(__dirname,'../views/index.html'));
});

router.post('/send',(req,res)=>{
    let test=false;
    for (let index = 0; index < users.length; index++) {
        if (users[index].username===req.body.username&&users[index].password===req.body.password) {
            test=true;
            break;
        }
    }
    if (test===true) {
        res.send('pass');
    }
    else{
        res.send('fail');
    }
});

module.exports=router;