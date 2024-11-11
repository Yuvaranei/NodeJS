const { randomBytes } = require('crypto');
const UserService = require('../services/user.service');

const sessions = new Map();

async function handleSignUp(req, res){
    try{
        const {firstName, lastName, emailId, password} = req.body;
        console.log("Request body", req.body);
        await UserService.createUser({firstName, lastName, emailId, password});
        res.status(200).send("User created successfully!");
    }
    catch(err){
        res.status(500).send("Something went wrong!");
    }
}

async function fetchUserProfile(req, res){
    try{
        const {sessionId} = req.body;
        console.log("sessions", sessions);
        console.log("sessionId", sessionId);
        if(sessions.has(sessionId)){
            const userInfo = sessions.get(sessionId);
            res.status(200).json(userInfo);
        } else {
            res.status(401).send('Unauthenticated user');
        }
    }
    catch(err){
        res.status(500).send("Something went wrong!");
    }
}


async function handleSignIn(req, res){
    try {
        const {emailId, password} = req.body;
        const userInfo = await UserService.getUserInfo(emailId);
        const {password: userPassword, firstName, lastName} = userInfo;
        
        if(password === userPassword){
            const sessionId = randomBytes(16).toString('hex');
            sessions.set(sessionId, userInfo);
            res.status(200).json({firstName, lastName, sessionId});
        }
        else {
            res.status(401).send(`Unauthenticated user!`);
        }
    }
    catch(err){
        res.status(500).send("Something went wrong", err);
    }
    
    
}

module.exports = {
    handleSignUp,
    handleSignIn,
    fetchUserProfile
}