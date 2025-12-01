function  delayfunc(time){
    return new Promise((resolve)=>{setTimeout(resolve,time)})
}

console.log("start");
delayfunc(2000).then(()=>{console.log("promise works ")})
console.log("end");


function once(a,b){
    return new Promise((resolve,reject)=>{
        if(b==0){reject('cant perform')}
        else{
            resolve(a/b);
        }
    })
}

once(4,0)
.then(res=>console.log(res))
.catch(e=>console.log(e));