const User = require('../model/user.model');

//Question: Why Service is defined as a class

class UserService {
    static async createUser({firstName, lastName, emailId, password}){
        return User.create({firstName, lastName, emailId, password});
    }

    static async getUserInfo(emailId){
        return await User.findOne({emailId});
    }
}
module.exports = UserService;