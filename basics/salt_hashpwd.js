const crypto = require('crypto');

//create salt
//hash a password with salt

const salt = crypto.randomBytes(26).toString('hex');

function hashPassword(password, salt, algorithm='sha256'){
    const hashedPassword = crypto.createHmac(algorithm, salt).update(password).digest('hex');
    return hashedPassword;
}



console.log("yuva", hashPassword('yuva', salt));
console.log("yuva", hashPassword('yuva', salt));
console.log("YUVA", hashPassword('YUVA', salt));
console.log("yuvA", hashPassword('yuvA', salt));
console.log("yuva", hashPassword('yuva', salt));