const {TweetRepository, HastagRepository }=require('../Repository/index')
class TweetService {
    constructor (){
        this.TweetRepository= new TweetRepository();
        this.hastagRepository=new HastagRepository();
    }

     async create(data){
        const create=data.content;
        const tags=create.match(/#[a-zA-Z0-9_]+/g) // regex extract 
       tags=tags.map((elements)=>elements.substring(1));
        console.log(tags);
        const tweet= await this.TweetRepository.create(data);
        const already=this.hastagRepository.findByName(tags).map((tag)=>tag.title);
        let newtags=tags.filter(value=> !already.includes(value));
        newtags=newtags.map(tag=>
             {
                 return {title:tag, tweet:[tweet.id]}
            })
        const respo=await this.hastagRepository.bulkcreate(newtags);
        // console.log(respo);
        return tweet;
    }



}

module.exports=TweetService;