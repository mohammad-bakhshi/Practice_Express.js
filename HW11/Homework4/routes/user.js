const express=require('express');

const router=express.Router();

const data=require('../user.json');

const check=[{
    username:''
}]

router.post('/getUser',function(req,res)
{
    check.username=req.body.username;
    let result=[];
    // for(let i=0; i<data.length; i++) {
    //     result.push({
    // //    ...(check.find((itmInner) => itmInner.username === data[i].username))
    //     }
    //   );
    // }
    let test=false
    for (let i = 0; i < data.length; i++) {
        if (check.username===data[i].username) {
            result.push(data[i]);
            test=true;
            break;
        }
    }
    if(test===true)
    {
        res.json(result);
    }
    else{
        res.send('username was not found.');
    }
});



module.exports=router;