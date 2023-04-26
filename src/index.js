const express = require("express");
const connect = require("./config/database");
const app = express();

const tweetRepo = require("./repository/tweet-repo");

const Tweet = require("./models/tweet");
const TweetRepo = require("./repository/tweet-repo");
const Comment = require("./models/comments");
app.listen(3000, async () => {
    console.log("Server is running on 3000");
    await connect();
    // console.log("Mongodb Connected");

    // const tweet=await Tweet.create({
    //     content:"third Tweet",
    //     userEmail:"hm@gmail.com"
    // })
    // const tweets=await Tweet.find();//it will return all the tweets
    // console.log(tweets);

    // const tweet=await Tweet.findById("64489079afb53cdeb21ecc57");
    // tweet.userEmail="Guruji@gmail.com";
    // await tweet.save(); // it is used to
    // console.log(typeof(tweet)); // it is an object

    //CRUD Operation

    //   const tweetR = new tweetRepo();

    // const tweet=await tweetR.get("64489079afb53cdeb21ecc57");
    // const tweet=await tweetR.get("64489079afb53cdeb21ecc57");
    //   const tweet = await tweetR.update(
    //     "64489079afb53cdeb21ecc57",
    //     { content: "updated tweeter " }

    //   );
    //   console.log(tweet);



    //additional 

    const tweetR = new TweetRepo();
    const tweet = await tweetR.create({ content: `tweet with comment schema` });
    console.log(tweet);
    const comment = await Comment.create({
        content: `comment for tweet ${tweet._id}`,
    });
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
});
