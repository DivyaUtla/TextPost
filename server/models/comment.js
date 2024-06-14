//import mongoose
const mongoose=require('mongoose');

//2.create Schema for entity
const commentSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    commentsforpost:{type:String}
})

//3.create mongoose model
const Comment=mongoose.model("Comment",commentSchema);

//4.Create CRUD functions on model
async function createComment(id,commentsforpost){
    const newComment=await Comment.create({
        userId:id,
        commentsforpost:commentsforpost
    })
    return newComment;
}

async function updateComment(id,commentsforpost){
    const comment=await Comment.updateOne({"_id":id},{$set:{commentsforpost:commentsforpost}});
    return comment;
}

async function deleteComment(id){
    await Comment.deleteOne({"_id":id});
}

async function getComment(id){
    return await Comment.findOne({"_id":id});
}

//Export all functions we want to access in routes
module.exports={
    createComment,updateComment,deleteComment,getComment
};