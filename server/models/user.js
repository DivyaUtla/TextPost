//1. import mongoose
const mongoose=require("mongoose");
const bcrypt=require('bcryptjs');

//2.create Schema for entity
const userSchema=new mongoose.Schema({
    username: {type:String, unique: true, required: true},
    password:{type:String, required:true},
    followers:[String],
    following:[String]
})

//3.create mongoose model
const User=mongoose.model("User",userSchema);

//4.Create CRUD functions on model

//CREATE a User
async function register(username,password){
    const user=await getUser(username);
    console.log(user);
    if(user) throw Error('Username already exists');

    const salt=await bcrypt.genSalt(10);
    const hashed=await bcrypt.hash(password,salt);

    const newUser=await User.create({
        username:username,
        password:hashed
    })

    return newUser._doc;
}

//READ a User
async function login(username,password){
    const user=await getUser(username);
    if(!user) throw Error('User not found');

    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch) throw Error('Wrong Password!');
    //if(user.password!=password) throw Error('Wrong Password');

    return user._doc;
}
//UPDATE an User
async function updatePassword(id,password){
    const user=await User.updateOne({"_id":id},{$set:{password:password}});

    return user;
}

//DELETE an User
async function deleteUser(id){
    await User.deleteOne({"_id":id});
};

async function getUser(username){
    return await User.findOne({"username":username});
}

//Export all functions we want to access in routes
module.exports={
    register,login,updatePassword,deleteUser
};