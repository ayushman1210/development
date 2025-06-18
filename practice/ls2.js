function sum(a,b){
    return a+b;
}

const res=sum(2,3);
console.log(res);

// call back function 
function sum1(a,b,ftc){
    let result =a+b;
    ftc(result);
}

function func(data){
    console.log("this is the data "+ data);
}

sum1(2,3,func);