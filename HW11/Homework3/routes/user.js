const express = require('express');

const router = express.Router();


router.get('/create',function (req,res) {
   res.send('user was created successfully.'); 
});


router.get('/update',function (req,res) {
    res.send('user was updated successfully.'); 
 });

 router.get('/delete',function (req,res) {
    res.send('user was deleted successfully.'); 
 });

 router.get('/add',function (req,res) {
    res.send('user was added successfully.'); 
 });


module.exports = router;