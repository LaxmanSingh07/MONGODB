const express = require("express");
const connect = require("./config/database");
const app = express();

// const tweetRepo = require("./repository/tweet-repo");

// const Tweet = require("./models/tweet");
const TweetRepo = require("./repository/tweet-repo");
// const Comment = require("./models/comments");

const {HashtagRepo}=require('./repository/index');

const TweetService = require("./services/tweet-service");
app.listen(3000, async () => {
    console.log("Server is running on 3000");
  await connect();
console.log("db connect successfully");

// let repo=new HashtagRepo();



// let response=await repo.findByName(
//     ['Happy','Fun']
// )
// response=response.map(tags=>tags.title);
// console.log(response);


let service=new TweetService();
const tweet=await service.create({
    content:"This is my #Python #Hapy #tweet . I am really #excited"
})
// console.log(tweet)

})
