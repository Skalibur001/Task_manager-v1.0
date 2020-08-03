const jwt=require('jsonwebtoken');
const User=require('../models/user');

const auth=async(req,res,next)=>
{
    try 
    {
    //extract token out of url

        const token=req.header('Authorization').replace('Bearer ','');
      
        //check for whether we created it or not
        const decode=jwt.verify(token,'The_task_manager_App');
       
    //check wheather its still avilable or not, tokens.token is a property that is 
    //to be searched and a string at the same time thats why it is in quotes and also not 
    // decode.tokens.token because we have to search it
    const user=await User.findOne({_id:decode._id,'tokens.token':token})    

        if(!user)
        {
            throw new Error();
        }
        req.token=token
        req.user=user
        next()

    } 
    catch (error) 
    {
            res.send({error:'cannot authenticate'})       
    }
}

module.exports=auth