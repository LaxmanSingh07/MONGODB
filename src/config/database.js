const mongoose=require('mongoose');

try{const connect=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/Twitter_Dev');

}
module.exports=connect;
}
catch(error)
{
    console.log(error);
}
