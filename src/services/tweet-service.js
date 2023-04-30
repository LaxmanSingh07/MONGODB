const {TweetRepo} = require('../repository/index');

class TweetService{
    constructor ()
    {
        this.tweetRepo=new TweetRepo();
    }

    async create(data)
    {
        const content=data.content;
        const tags=context.match(/#[a-zA-Z0-9_]+/g);

        tags=tags.map((tag)=>tag.slice(1));
        //tags=tags.map((tag)=>tag.substring(1));
        console.log(tags);

        const tweet=await this.tweetRepo.create({content:content,tags:tags});
        /**
         * 1 bulk create in mongoose
         * //bulkcraete means create multiple documents in one query
         * 2. filter title of hashtag based on multiple tags 
         * 3. how to add tweet id inside all the hashtags
         */
        
        return tweet;

    }
}

module.exports = TweetService;

/*
this is my #first #tweet . I am really #excited*/
//regular expression

//regex
