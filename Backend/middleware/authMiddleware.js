const jwt=require("jsonwebtoken")

const auth=(role)=>(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.send({msg:"login first"})
    }
    jwt.verify(token, "idea", function(err, decoded) {
        if (err) {
            return res.status(401).json({ msg: "Token is not valid" });
        } 
        else {
            if (decoded.user.role != role) {
                return res.status(403).json({ msg: `Access denied, only ${role} allowed `});
            }
            req.userId = decoded.userId;
            next();
        }
    });
}
module.exports=auth