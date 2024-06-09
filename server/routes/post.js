//1. Import needed libraries
const express=require("express");
const User=require('../models/user');//Accesses funxtions in user model file
const router=express.Router();

router
    .get('/getPost',async (req,res)=>{
        try{
            const post=await Post.getPost(req.body.id,req.body.contentofpost);
            res.send(post);
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .post('/createPost',async (req,res)=>{
        try{
            const post=await Post.createPost(req.body.id,req.body.contentofpost);
            res.send(post);
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .put('/updatePost',async (req,res)=>{
        try{
            const post=await Post.updatePost(req.body.id,req.body.contentofpost);
            res.send(post);
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .delete('/deletePost',async(req,res)=>{
        try{
            await Post.deletePost(req.body.id);
            res.send({success:"Post deleted..."});
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

//3. export router for use in index.js file
 module.exports=router;