const product=require('../model/product')

const sampleproduct=async(req,res)=>{
    try {
        const data=[
            {name:"ar",category:"pich",price:200, instock:true, tags:["available","current"] },
             {name:"ar1",category:"pich",price:300, instock:true, tags:["available","current"] },
              {name:"ar2",category:"pich2",price:400, instock:true, tags:["available","current"] },
               {name:"ar3",category:"pich2",price:500, instock:true, tags:["available","current"] },

        ]

        const created=await product.insertMany(data);
        res.status(200).json({
            message:"data saved ",
            data:`${created} ${created.length}`
        })
    } catch (error) {
        res.json({
            message:"not",
            success:false,
            error:error.message
        })
    }
}

const get=async(req,res)=>{
    const data=await product.find({});
    if(!data){
        return res.json({
        message:"data not found",
        eror:error.message,
        success:false
    })
}

res.json({
    message:`total data is ${data.length}`,
    data:data
})
}

const getproduct=async(req,res)=>{
    const filter=await product.aggregate([
        {
            $match:{
                instock:true,
                price:{
                    $gte :200
                }
            }
        },

        {$group:{
            _id:"$category",
            avg:{
                $avg:"$price"
            },
            count:{
                $sum:1
            }
        }}
    ])

    res.json({
        data:filter
    })
}

const analysis=async(req,res)=>{
    try {
        const resp=await product.aggregate([
            {
                $match:{
                    category:"pich"
                }
            }
        ])

        res.send(resp);
    } catch (error) {
        console.log('error')
    }
}
module.exports={sampleproduct,getproduct,analysis,get}