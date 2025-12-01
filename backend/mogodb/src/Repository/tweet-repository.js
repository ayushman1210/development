const Tweet= require('../models/tweet')


class TweetRepository{
    async create(data){
        try {
         const tweet=await Tweet.create(data);
         return tweet;
        } catch (error) {
            console.log(error)
        }

    }
    async get(id){
        try {
            const data=await Tweet.findById(id);
            return data;
        } catch (error) {
            console.log(error)
        }

    }
    async getwithcomment(id){
        try {
            const data=await Tweet.findById(id).populate({path:"comment"})
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
 // for pagination 
    async getAll(offset,limit){
        try {
            const data=await Tweet.find().skip(offset).limit(limit);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports=TweetRepository;