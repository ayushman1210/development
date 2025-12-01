const hastag= require('../models/hastag')


class hastagRepository{
    async create(data){
        try {
         const hastag=await hastag.create(data);
         return hastag;
        } catch (error) {
            console.log(error)
        }

    }

    async bulkCreate(data){
        try {
            const tags= await hastag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error)
        }
    }

    async get(id){
        try {
            const data=await hastag.findById(id);
            return data;
        } catch (error) {
            console.log(error)
        }

    }

    async destroy(id){
        try {
            const hastag=await hastag.findByIdAndRemove(id);
            return hastag;
        } catch (error) {
            console.log(error)
        }
    }
 async findByName(titlelist){
    try {
        const tags= await hastag.find({
            title:titlelist
        }).select('title-_id');
        return tags;
    } catch (error) {
        console.log(error);
    }
 }
}

module.exports=hastagRepository;