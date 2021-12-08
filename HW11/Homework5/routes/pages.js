const express=require('express');

const router=express.Router();

const path=require('path');

router.get('/file1',function (req,res) {
    res.sendFile(path.join(__dirname,'../views/index1.html'));
});

router.get('/file2',function (req,res) {
    res.sendFile(path.join(__dirname,'../views/index2.html'));
});

router.get('/file3',function (req,res) {
    res.sendFile(path.join(__dirname,'../views/index3.html'));
});

router.get('/file4',function (req,res) {
    res.sendFile(path.join(__dirname,'../views/index4.html'));
});

router.get('/file5',function (req,res) {
    res.sendFile(path.join(__dirname,'../views/index5.html'));
});

module.exports=router;