const jwt=require('jsonwebtoken'); 
const auth=(req,res,next)=>{
    try {
        const token=req.header('Auth-Token')
        if(!token)return res.status(400).json({msg:"you are note authorized"})
        jwt.verify(token,'secret token',(err,user)=>{
            if(err)return res.status(400).json({msg:"you are note authorized"})
            req.user = user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
}
module.exports=auth