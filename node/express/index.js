const express =require('express')
const app=express();
function combo(n){
    let ans=0;
    for(let i=0; i<n; i++){
        ans=ans+i;
    }
    return ans;
}
 
app.get('/',(req,res)=>{
    const n=req.query.n;
    const ans=combo(n);
    res.send(ans);
    console.log(ans);
})

app.listen(3000,()=>{
    console.log("server started ")
})
