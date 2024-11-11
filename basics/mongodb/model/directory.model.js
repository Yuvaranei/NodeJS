const {Schema, model} = require('mongoose');

const telephoneDirectorySchema = new Schema(
    {
        phoneNumber: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        }
    }, 
    { timestamps: true}
);

const TelephoneDirectory = model('telephoneDirectory', telephoneDirectorySchema);
module.exports = TelephoneDirectory;