const timespan = require('jsonwebtoken/lib/timespan')
const mongoose = require ('mongoose')
const uniqueValidator = require("mongoose-unique-validator")
const UserSchema = new mongoose.Schema ({
    firstName: {type: String, maxlenght:64, required: true},
    lastName: {type: String, maxlenght:64, required: true },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true,
        lowercase: true,
    },
    password: {type: String, minlenght:8, maxlenght:1024,required:true},
    isAdmin:{
        type : Boolean,
        required : true,
        default : false
    },
        cart: { type: Array,default: [], },     
},
    {timestamps: true}
);


UserSchema.plugin(uniqueValidator, { message: "not unique" });
module.exports = mongoose.model("User", UserSchema);