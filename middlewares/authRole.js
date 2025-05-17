

const authRole=(...allowedRole)=>{
    return(req,res,next)=>{
    try {
        const user=req.user;

        if(!user || !allowedRole.includes(user.role)){
            return res.status(403).json({success:false,message:"Access denied: Insufficient permissions",});
        }
     next();
    } 
    
    catch (error) { 
        res.status(500).json({success:false,message:"Error in authRole middleware",error:error.message})
    }
}
}

module.exports=authRole;