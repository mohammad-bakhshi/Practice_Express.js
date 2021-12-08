const express=require('express');

const router=express.Router();

const data=require('../user.json');


router.get('/getAllUsers',function(req,res)
{
    res.send(data);
});





module.exports=router;