const mongoose = require("mongoose");

//this is how we define an schema

const tweetScema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
        },
        comments: [
            {
                content: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true }
);

//model is used to connect to the server and creating new document
//there is no need to pass the plural value
//it will automatically done by the mongodb
const Tweet = mongoose.model("Tweet", tweetScema);
module.exports = Tweet;
