// //call back functions 
// function square(n){
// return n*n;
// }
// function cube(n){
// return n*n*n;
// }

// function sum(n,fn){
//    return  fn(n);
// }

// console.log(sum(2,square));

// // Your goal:
// operate(3, 4, add) => 7
// operate(10, 5, subtract) => 5

// function sum(a,b){
// return a+b;
// }

// function input(a,b,fn){
//     return fn(a,b);
// }


// console.log(input(3,4,sum));


// function sub(a,b){
//     return a-b;
// }

// function input(a,b,fn){
//     return fn(a,b);
// }

// console.log(input(5,3,sub));

// function hello(){
//     console.log("hello baccho")
// }

// function fun(n,fn){
// for(let i=0; i<n; i++){
//  fn();
// }
// }

// (fun(3,hello));

// // delayedGreet("Alice", greet) => waits 2 sec, then calls greet("Alice")

// function greet(name){
// return `hello ${name}`
// }


// function fun(name,fn){
//     setTimeout(() => {
//        fn(name); 
//     }, 1000);
// }

// fun("alice",greet);

// function sqr(n){
//     return n*n;
// }

// function cbe(b){
//     return b*b*b;
// }

// function su(n,b,fn){
//     let val=fn(n)
//     let val2=fn(b);
//     return val+val2;
// }

// let ans=su(2,2,sqr);
// console.log(ans);

// function sun(a,b){
//     return a+b;
// }

// console.log(sun(3,4));
// console.log(sun(3,5));
// console.log(sun(3,5));
// console.log(sun(3,5));

//async function 

// const a=1;
// console.log(a);
// function fun(){
//     console.log('hello')
// 
// }
// setTimeout(fun,2000);

// console.log("hi")


//callback hell
// setTimeout(() => {
//     function fun(){
//         console.log("hello everyone")
//     }
//     setTimeout(fun,2000);
//     console.log("hello")
// }, 2000);



function my(cb,d){
    setTimeout(cb,d);
}
my(function(){
    console.log("settmeoit")
},1000);

function promise(d){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },d)
    });

    return p;
}

const ans=promise(10000);
ans.then(function(){
    console.log("hi");
})