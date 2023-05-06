const mongoose = require("mongoose");

//this is how we define an schema

const tweetSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            max:[250,"Tweet cannot be more than 250 characters"]

        },

        hastags:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Hashtag"
            }
        ],

    },
    { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
