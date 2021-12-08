const express = require('express');

const router = express.Router();

router.get('/helloworld',function(req,res)
{
    res.send('Hello World!');
});

module.exports = router;