console.log("hello world ");

enum direction {
    up,
    down,
    left ,
    right
}

function direct(keypress:direction){

if(keypress==direction.up){
console.log("return get rewarded section ")
}

}

direct(direction.up);


type hi=number| string;

function hello(arr:hi[]){
return arr[0];
}

const val=hello(["ayushman","gupta"]);
// console.log(val.toString()) // here is error so we use the generics 


function identity<T>(arg:string | number){
return arg;
}

identity<string>("ayushman");
identity<number>(100);


function getelement<T>(arr:T[]){
    return arr[0];
}

const el=getelement(["hello"])  ;

console.log(el?.toLowerCase())