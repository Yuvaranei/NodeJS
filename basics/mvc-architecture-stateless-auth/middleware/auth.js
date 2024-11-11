const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../utility/constants');


async function ensureAuthenticated(req, res){
    try {
        const {authorization} =  req.headers;
        const auth_token = String(authorization).split(' ')[1];
        
        const payload = await jwt.verify(auth_token, jwt_secret);

        req.user = payload;
        
        res.status(200).json(payload);
    }
    catch(err){
        res.status(401).send("Invalid auth token");
    }
    
}

module.exports = {
    ensureAuthenticated
}