const mongoose = require("mongoose");

//this is how we define an schema

const commentSchema = new mongoose.Schema(
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


const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
