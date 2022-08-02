const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const User = require("../Model/User");

const addUser = async (req, res) => {
    try{
        console.log(req.body);

        const {username,email} = req.body;
        const isEmailExist = await User.findOne({"email" : email}).lean();
        if(isEmailExist ){
            return res.status(403).json({error : "User already Exists"});
        }

        const isUsernameExist = await User.findOne({username : username});
        if(isUsernameExist){
            return res.status(403).json({error : "User already Exists"});
        }

        const userObj = {
            username,
            email
        }

        const user = new User(userObj);
        const isUserSavedSuccessfully = await user.save();

        if(!isUserSavedSuccessfully){
            return res.status(401).json({error : "Account cannot be registered"});
        }

        return res.status(200).json(isUserSavedSuccessfully);
    }catch(err){
        console.log(err);
        return res.status(401).json({error : err});
    }
}

const removeUser = async (req, res) => {
    try{
        const email = req.params.email;
        const isEmailExist = await User.findOne({email: email});
        if(!isEmailExist){
            return res.status(404).json({error : "Email not found"});
        }
        await User.deleteOne({email : email});
        return res.status(200).json({error : 'User deleted successfully'});
    }catch(err){
        console.log(err);
        return res.status(401).json({error : err});
    }
}

const getUserList = async (req, res) => {
    try{
        const userList = await User.find();
        return res.status(200).json(userList);
    }catch(err){
        console.log(err);
        return res.status(401).json({error : err});
    }
}
router.post('/user/add-user', addUser);
router.get('/user/remove-user/:email', removeUser);
router.get('/user/list', getUserList);
module.exports = router;
