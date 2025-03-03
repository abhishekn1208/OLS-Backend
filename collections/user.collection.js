import User from "../module/User.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
const saltRounds = 10;

export const RegisterUser=async(req,res)=>{
    const {username,password,role} = req.body;

    try {
        const user = await User.findOne({username})
    if(user){
        return res.status(400).json({message : 'User with this username is already exists'})
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = new User({username : username,password : hashedPassword,role : role})
    await newUser.save()
    res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message : 'Internal Server Error'})
    }
}

export const LoginUser=async(req,res)=>{
    const {username,password} = req.body;

    try {
        const user = await User.findOne({username})

    if(!user) return res.status(404).json({message : 'User not found'})
    const storedPassword = user.password
    const isPasswordMatched = bcrypt.compareSync(password, storedPassword);

    if(isPasswordMatched){
    
        const token = jwt.sign({ userId: user._id, role : user.role }, process.env.SECRET_KEY);
        res.status(200).json({message : 'Successfully logged in',token,userRole : user.role}) 
    }else{
        res.status(400).json({message : "Incorrect Password"})
    }
    } catch (error) {
        res.status(500).json({message : 'Internal Server Error'})
    }
}