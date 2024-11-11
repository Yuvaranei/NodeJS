const jwt = require('jsonwebtoken');
const { jwt_secret } = require('./constants');

async function generateToken(payload){
    const token = await jwt.sign(payload, jwt_secret);
    console.log("Generated token = ", token);
    return token;
}

async function verifyToken(token){
    const payload = await jwt.verify(token, jwt_secret);
    console.log("Verified token and payload info = ", payload);
    return payload;
}

module.exports = {
    generateToken,
    verifyToken
}