const User = require("../models/user.models")
const jwt = require('jsonwebtoken');
require('dotenv').config()
const generateToken = (user)=>{
    return jwt.sign({user}, process.env.SECRET_KEY)
};

const register = async(req,res)=>{
    try{
        let user = await User.findOne({email: requestAnimationFrame.body.email});
        if(user){
            return res.status(400).send({message : "Email already registered"})
        }
        user = await User.create(req.body);
        const token = generateToken(user);

        return res.status(400).send({user, token})
    } 
    
   
    catch(err){
        res.status(400).send({message:err.message})
    }

};

const login = async (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(400).send("Wrong credentials")
        }
    
        const match = user.checkPassword(req.body.password);
    
        if(!match){
            return  res.status(400).send("Wrong credentials")
        }
    
        const token = generateToken(user)
        return res.status(200).send(user,token);
    }catch(e){
        req.status(400).send({message: e.message})
    }
   
}

module.exports = {register,login}
