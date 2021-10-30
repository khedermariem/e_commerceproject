const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    name : { type: String, required: true},
    rating : { type: Number, required: true},
    comment : { type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User' //relation betwen the review and the user
    },
},{ 
    timestamps: true,
})

module.exports = mongoose.model("Review", ReviewSchema);