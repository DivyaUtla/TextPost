//1. import mongoose
const mongoose=require("mongoose");

//2.create Schema for entity
const postSchema=new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    contentofpost:{type:String, unique:true}
    //commentsforpost:{type:String}
})

//3.create mongoose model
const Post=mongoose.model("Post",postSchema);

//4.Create CRUD functions on model

//CREATE a User
async function createPost(id,contentofpost){
    const newPost=await Post.create({
        userId:id,
        contentofpost:contentofpost
    })
return newPost;    
}

async function updatePost(id,contentofpost){
    const post=await Post.updateOne({"_id":id},{$set:{contentofpost:contentofpost}});
    return post;
}

//DELETE an User
async function deletePost(id){
    await Post.deleteOne({"_id":id});
}

async function getPost(id){
    return await Post.findOne({"_id":id});
}

module.exports={
    createPost,updatePost,deletePost,getPost
};