//1. import mongoose
const mongoose=require("mongoose");

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

    const newUser=await User.create({
        username:username,
        password:password
    })

    return newUser;
}

//READ a User
async function login(username,password){
    const user=await getUser(username);
    if(!user) throw Error('User not found');
    if(user.password!=password) throw Error('Wrong Password');

    return user;
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