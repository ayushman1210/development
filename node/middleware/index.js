const express=require('express')

const app=express();

function old(age){
    if(age>=14){return true;}
    else return false;
}


function oldmiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14){next();}

    else {
        res.status(400).json({
            msg:"you r not allowed"
        })
    }

}

app.get('/ride',(req,res)=>{
 if(old(req.query.age)){
res.json({
    message:"you r ready to go "
})
    } else{
        res.status(400).json({
            msg:"you r not allowed"
        })
    }

})


//used middleware 
app.use(oldmiddleware)
app.get('/ride1',(req,res)=>{
res.json({
    message:"you r ready to go "
})
 })


app.listen(3000,()=>{
    console.log('servevr statrted ')
})