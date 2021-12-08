const express=require('express');

const router=express.Router();

router.post('/login',function(req, res){
    console.log(req.body)
    res.send('yep')
})

module.exports=router;