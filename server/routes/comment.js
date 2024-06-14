//1. Import needed libraries
const express=require("express");
const Comment=require('../models/comment');//Accesses functions in comment model file
const router=express.Router();

router
    .get('/getComment',async (req,res)=>{
        try{
            const comment=await Comment.getComment(req.body.id);
            res.send(comment);
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .post('/createComment', async (req,res)=>{
        try{
            const comment=await Comment.createComment(req.body.id,req.body.commentsforpost);
            res.send(comment);
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .put('/updateComment',async (req,res)=>{
        try{
            const comment=await Post.updatePost(req.body.id,req.body.commentsforpost);
            res.send(comment);
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

    .delete('/deleteComment',async(req,res)=>{
        try{
            await Comment.deleteComment(req.body.id);
            res.send({success:"Comment deleted Successfully..."});
        }catch(error){
            res.status(401).send({message:error.message});
        }
    })

//3. export router for use in index.js file
module.exports=router;