const jwt=require("jsonwebtoken")

const protect=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]

    if(token){
        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            req.user=decoded.id
            next()

        }
        catch(error){
            return res.status(401).json({
                message:"invalid token"
            })
        }

    }
    else{
        return res.status(401).json({
            message:"Token not required"
        })
    }
}
module.exports = { protect };