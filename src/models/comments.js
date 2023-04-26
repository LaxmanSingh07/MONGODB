const mongoose = require("mongoose");

//this is how we define an schema

const commentScema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
        },
   
    },
    { timestamps: true }
);


const Comment = mongoose.model("Comment", commentScema);
module.exports = Comment;
