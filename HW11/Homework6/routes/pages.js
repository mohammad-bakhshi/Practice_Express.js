const express=require('express');

const router=express.Router();

const path=require('path');

router.get('/files/:index',function (req,res) {
    if (req.params['index']==='1') {
        res.sendFile(path.join(__dirname,'../views/index1.html'));
    }
    else if(req.params['index']==='2')
    {
        res.sendFile(path.join(__dirname,'../views/index2.html'));
    }
    else if(req.params['index']==='3')
    {
        res.sendFile(path.join(__dirname,'../views/index3.html'));
    }
    else if(req.params['index']==='4')
    {
        res.sendFile(path.join(__dirname,'../views/index4.html'));
    }
    else if(req.params['index']==='5')
    {
        res.sendFile(path.join(__dirname,'../views/index5.html'));
    }
    
});


module.exports=router;
