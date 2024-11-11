const UserService = require('../services/user.service');

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


async function handleSignIn(req, res){
    try {
        const {emailId, password} = req.body;
        const userInfo = await UserService.getUserInfo(emailId);
        const {password: userPassword, firstName, lastName} = userInfo;

        if(password === userPassword){
            res.status(200).send(`Hello ${firstName} ${lastName}`);
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
    handleSignIn
}