//1. Import needed libraries
const express=require("express");
const User=require('../models/user');//Accesses funxtions in user model file
const router=express.Router();

router
    .post('/login',async(req,res)=>{
        try{
            const user=await User.login(req.body.username, req.body.password);
            res.send({...user,password:undefined});
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .post('/register',async(req,res)=>{
        try{
            const { username, password, password2 } = req.body;

            // Validating if passwords match
            if (password !== password2) {
                throw Error("Passwords do not match");
            }
            const user=await User.register(req.body.username, req.body.password);
            res.send({...user,password:undefined});
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .put('/update',async(req,res)=>{
        try{
            const user=await User.updatePassword(req.body.id,req.body.password);
            res.send({...user,password:undefined});
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .delete('/delete',async(req,res)=>{
        try{
            await User.deleteUser(req.body.id);
            res.send({success:"Account deleted"});
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

//3. export router for use in index.js file
module.exports=router;