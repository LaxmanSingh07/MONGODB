const Tweet=require('../models/tweet');

class TweetRepo{
  
    async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet;
        }      
        catch(error){
            console.log(error);
        }
    }

    async get(id){
        try{
            const tweet=await Tweet.findById(id);
            return tweet;
        }      
        catch(error){
            console.log(error);
        }
    }

    async update(tweetId,data){

        try{
            const tweet=await Tweet.findByIdAndUpdate(tweetId,data,  { new: true });
            return tweet;
        }
        catch(error)
        {
            console.log(error);
        }

    }

    async destrou(id){

        try{
            const tweet=await Tweet.findByIdAndRemove(id);
            return tweet;
        }
        catch(error){
            console.log(error);
        }   

    }
}

module.exports=TweetRepo;