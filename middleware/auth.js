 import jwt from 'jsonwebtoken'

 const auth = (req,res,next)=>{

    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token) return res.status(400).json({message : 'Access Denied'})

            const decoded = jwt.verify(token,process.env.SECRET_KEY)
            
            if(decoded){
               req.userId = decoded.userId,
               req.role = decoded.role
            next();
            }else{
                res.status(400).json({message : 'Unauthorized'})
            }
    } catch (error) {
        res.status(500).json({message : 'Error in authentication'})
    }
}

export default auth;