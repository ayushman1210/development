let value="ayushmna";

const res=value.substr(2,4);
console.log(res);

// [slice),split,touppercase,str.length, indexof,[substr(from where , length )],replace,split(array of words),trim
// parseInt,parsefloat
//push, pop,shift,unshift,concat
//forEach, map , filter , find sort 
function thing(str){
    console.log(str)
}

let arr=[1,2,3,4,5]
arr.forEach(thing)


//callback 
function log(){
    console.log("hello ayush")
}

function log1(fn){
    fn();
}
log1(log);