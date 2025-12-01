
function sum(a,b){
    return a+b;
}

async function hello(a,b){
    const res=await sum(a,b);
    console.log(res);
}


console.log(hello(2,3));
