## Some Commands

`timestamps`



`findByIdAndUpdate` :

` update a document by id and return old document`

`How` we can get the latest data? 

`you can pass an object known as the option`

Example: 

```js
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

```

`Nesting of the `

