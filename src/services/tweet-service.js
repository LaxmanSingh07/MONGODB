const {TweetRepo,HashtagRepo} = require('../repository/index');

class TweetService{
    constructor ()
    {
        this.tweetRepo=new TweetRepo();
        this.hashtagRepo=new HashtagRepo();
    }

    async create(data)
    {
        const content=data.content;
        // console.log(content);
        const tags=content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.slice(1));
        
        // console.log(tags);
        // tags=tags.map((tag)=>tag.slice(1));
        // tags=tags.map((tag)=>tag.substring(1));

        const tweet=await this.tweetRepo.create(data);
        // console.log(tweet)

        /**
         * 1 bulk create in mongoose
         * //bulkcraete(insertMany) means create multiple documents in one query
         * 2. filter title of hashtag based on multiple tags 
         * 3. how to add tweet id inside all the hashtags
         */
        // console.log(tags);
        let alreadyPresentTags=await this.hashtagRepo.findByName(tags);
        // console.log(alreadyPresentTags);
        //[excited,coding,js,carrer] --> [{title:excited},{title:carrrer}]
        alreadyPresentTags=alreadyPresentTags.map((tags)=>tags.title);
        let newTags=tags.filter(tag=>{
            !alreadyPresentTags.includes(tag);
        })
        // console.log(newTags);

        newTags=newTags.map(tag=>{
           return {
            title:tag,
            tweets:[tweet.id]
           }
        })

        console.log(newTags)


        const response=await this.hashtagRepo.bulkCreate(newTags);
        // console.log(response);
     
        return tweet;

    }
}

module.exports = TweetService;

/*
this is my #first #tweet . I am really #excited*/
//regular expression

//regex
