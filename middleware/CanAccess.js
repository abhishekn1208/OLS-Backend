const CanAccess=(acceptedRole)=>{

    return (req,res,next)=>{
        console.log(req.role)
        if(req.role === acceptedRole){
            next()
        }else{
            res.status(400).json({message : 'Unauthorized access'})
        }
    }
}

export default CanAccess;